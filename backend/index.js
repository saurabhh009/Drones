const express = require("express");
const bodyParser = require('body-parser');

const signUpEnd=require("./userEndpoint/signUp");
const login=require("./userEndpoint/login");
const userDetails=require("./userEndpoint/userDetails");

const siteCreate=require("./siteEndpoint/siteCreate");
const siteUpdate=require("./siteEndpoint/siteUpdate");
const siteDelete=require("./siteEndpoint/siteDelete");

const userSiteCreate=require("./userSiteEndpoint/userSiteCreate");
const userSiteUpdate=require("./userSiteEndpoint/userSiteUpdate");
const userSiteDelete=require("./userSiteEndpoint/userSiteDelete");

const missionCreate=require("./missionEndpoint/missionCreate");
const missionUpdate=require("./missionEndpoint/missionUpdate");
const missionDelete=require("./missionEndpoint/missionDelete");

const droneCreate=require("./droneEndpoint/droneCreate");
const droneUpdate=require("./droneEndpoint/droneUpdate");
const droneDelete=require("./droneEndpoint/droneDelete");

const shiftDroneSite=require("./miscell/shiftDroneSite");
const missionForSite=require("./miscell/missionsForSite");
const dronesForSite=require("./miscell/dronesForSite");
const missionForCat=require("./miscell/missionForCat");
const dronesForCat=require("./miscell/dronesForCat");

const categoryCreate=require("./categoryEndpoint/categoryCreate");
const categoryUpdate=require("./categoryEndpoint/categoryUpdate");
const categoryDelete=require("./categoryEndpoint/categoryDelete");

const userCatCreate=require("./userCategory/userCatCreate");
const userCatUpdate=require("./userCategory/userCatUpdate");
const userCatDelete=require("./userCategory/userCatDelete");
require("./db-conn/conn"); 
const authenticateUser = require('../backend/jwt/authenticateToken');

const app = express();

const port = 5000;

app.listen(port, () => {
    console.log("Server is running on port", port);
});

app.use(bodyParser.json());

app.post("/signUp", signUpEnd);
app.post("/login", login);
app.get("/user", authenticateUser, userDetails);

//no
app.post("/site", siteCreate);
app.put("/site/:id", siteUpdate);
app.delete("/site/:id", siteDelete);

app.post("/users/sites", authenticateUser, userSiteCreate);
app.put("/users/sites/:siteId",authenticateUser, userSiteUpdate);
app.delete("/users/sites/:siteId", authenticateUser, userSiteDelete);

app.post("/site/:siteId/drone/:droneId/category/:categoryId/mission", authenticateUser,  missionCreate);
app.put("/site/:siteId/mission/:missionId", authenticateUser,  missionUpdate);
app.delete("/site/:siteId/mission/:missionId", authenticateUser, missionDelete);

app.post("/site/:siteId/drone", authenticateUser,  droneCreate);
app.put("/site/:siteId/drone/:droneId", authenticateUser, droneUpdate);
app.delete("/site/:siteId/drone/:droneId",authenticateUser, droneDelete);

app.put('/drones/:droneId/shift', authenticateUser, shiftDroneSite);

//no
app.get('/sites/:siteId/missions',missionForSite);
app.get('/sites/:siteId/drones',dronesForSite);
app.get('/cat/:catId/missions',missionForCat);
app.get('/cat/:catId/drones',dronesForCat);

//no
app.post("/categories",categoryCreate);
app.put("/categories/:id",categoryUpdate);
app.delete("/categories/:id",categoryDelete);

app.post("/users/userCat", authenticateUser, userCatCreate);
app.put("/users/userCat/:id", authenticateUser, userCatUpdate);
app.delete("/users/userCat/:id", authenticateUser, userCatDelete);