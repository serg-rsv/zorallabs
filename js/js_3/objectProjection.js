const objectProjection = (sourceJsonObject, prototypeObject) => {
  const recursiveProjection = (sourceObj, protoObj) => {
    const projectedObj = {};

    for (let key in protoObj) {
      if (sourceObj.hasOwnProperty(key)) {
        if (protoObj[key] !== null) {
          projectedObj[key] = recursiveProjection(
            sourceObj[key],
            protoObj[key]
          );
        } else {
          projectedObj[key] = sourceObj[key];
        }
      }
    }

    return projectedObj;
  };

  const parsedSourceObj = JSON.parse(sourceJsonObject);

  return recursiveProjection(parsedSourceObj, prototypeObject);
};

