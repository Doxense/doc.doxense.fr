-- Plan de maintenance V2 (Optimisé)
-- Mise à jour : 2026
DECLARE @BdName nvarchar(100) = N'watchdocstats'
DECLARE @BackupPath nvarchar(100) = N'c:\backupDB\'
DECLARE @FullBackupPath nvarchar(150)
DECLARE @BackupName nvarchar(150)
DECLARE @TimeTable table( Step int, Fonction nvarchar(20), Datestart datetime, temps VARCHAR(8)) 

-- 1. SAUVEGARDE AVEC COMPRESSION
SET @BackupName = @BdName + '_Full_' + CONVERT(varchar(2), (DATEPART(wk,GETDATE())%4)) + '.bak'
SET @FullBackupPath = @BackupPath + @BackupName

INSERT INTO @TimeTable(Step, Fonction, Datestart) VALUES (1, 'Backup', GETDATE())

BACKUP DATABASE @BdName TO DISK = @FullBackupPath 
WITH NOFORMAT, INIT, NAME = @BdName, SKIP, NOREWIND, NOUNLOAD, COMPRESSION, STATS = 10

UPDATE @TimeTable SET temps = CONVERT(VARCHAR(8), (GETDATE() - Datestart), 108) WHERE Step = 1

-- 2. SUPPRESSION DES DONNÉES ANCIENNES (BATCH)
INSERT INTO @TimeTable(Step, Fonction, Datestart) VALUES (2, 'Purge', GETDATE())
-- Garde le système de boucle Top (2000) car il évite de saturer les logs de transaction
DECLARE @Rows INT = 1
WHILE @Rows > 0
BEGIN
    DELETE TOP (5000) FROM watchdocstats.dbo.documents WHERE docdateoperation < DATEADD(year, -2, GETDATE())
    SET @Rows = @@ROWCOUNT
END
-- (Répéter pour incidents et queuescounters si nécessaire)
UPDATE @TimeTable SET temps = CONVERT(VARCHAR(8), (GETDATE() - Datestart), 108) WHERE Step = 2

-- 3. VÉRIFICATION D'INTÉGRITÉ (CRITIQUE)
INSERT INTO @TimeTable(Step, Fonction, Datestart) VALUES (3, 'Check Integrity', GETDATE())
DBCC CHECKDB (@BdName) WITH NO_INFOMSGS
UPDATE @TimeTable SET temps = CONVERT(VARCHAR(8), (GETDATE() - Datestart), 108) WHERE Step = 3

-- 4. OPTIMISATION DES INDEX (REORGANIZE PLUTÔT QUE REBUILD SI POSSIBLE)
INSERT INTO @TimeTable(Step, Fonction, Datestart) VALUES (4, 'Index Optiz', GETDATE())
-- Note : On utilise REBUILD ici pour rester simple, mais sans le SHRINK après !
EXEC ('ALTER INDEX ALL ON ' + @BdName + '.dbo.documents REBUILD WITH (ONLINE = ON)') -- ONLINE si Edition Enterprise
EXEC ('ALTER INDEX ALL ON ' + @BdName + '.dbo.incidents REBUILD')
EXEC ('ALTER INDEX ALL ON ' + @BdName + '.dbo.transactions REBUILD')
UPDATE @TimeTable SET temps = CONVERT(VARCHAR(8), (GETDATE() - Datestart), 108) WHERE Step = 4

-- 5. MISE À JOUR DES STATISTIQUES
INSERT INTO @TimeTable(Step, Fonction, Datestart) VALUES (5, 'Update Stats', GETDATE())
EXEC ('USE ' + @BdName + '; EXEC sp_updatestats')
UPDATE @TimeTable SET temps = CONVERT(VARCHAR(8), (GETDATE() - Datestart), 108) WHERE Step = 5

-- Logs Report
SELECT * FROM @TimeTable