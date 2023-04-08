SELECT name
FROM "group"
WHERE name LIKE 'TEST-%'
  AND id NOT IN (
    SELECT groupID
    FROM groupMembership)

