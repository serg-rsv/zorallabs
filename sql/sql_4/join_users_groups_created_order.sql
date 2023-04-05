SELECT user.firstName, user.lastName, "group".name
FROM user
JOIN groupMembership ON user.id = groupMembership.userID
JOIN "group" ON groupMembership.groupID = "group".id
WHERE user.created < "group".created
