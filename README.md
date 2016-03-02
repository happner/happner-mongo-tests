happner-mongo-tests
-------------------
*run happner in the context of using mongo instead of nedb, the following is an exampple of the config the context is running:*
```javascript
{
    name:"testMesh",
    datalayer: {
       plugin:"happn-service-mongo", // the mongo plugin, essentially the name of the module
       config:{
       	collection:"testMesh" //the collection on the mongodb
       }
    },
    ... etc

```

*you will also need to be sure you have installed the happn-service-mongo plugin, and mongo needs to be up and running*

```bash
npm install happn-service-mongo --save
```


