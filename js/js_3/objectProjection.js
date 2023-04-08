const objectProjection = (sourceObj, protoObj) => {
  const projectedObj = {};

  for (let key in protoObj) {
    if (sourceObj.hasOwnProperty(key)) {
      if (
        typeof protoObj[key] === 'object' &&
        typeof sourceObj[key] === 'object'
      ) {
        const isEmptyProto =
          protoObj[key] === null || Object.keys(protoObj[key]).length === 0;
        if (isEmptyProto) {
          projectedObj[key] = sourceObj[key];
        } else {
          projectedObj[key] = objectProjection(sourceObj[key], protoObj[key]);
          if (
            typeof projectedObj[key] === 'object' &&
            Object.keys(projectedObj[key]).length === 0
          ) {
            delete projectedObj[key];
          }
        }
      } else if (protoObj[key] === null) {
        projectedObj[key] = sourceObj[key];
      }
    }
  }

  return projectedObj;
};

// === Case 1 ===
const srcCase1 = {
  prop11: {
    prop21: 21,
    prop22: {
      prop31: 31,
      prop32: 32,
      prop33: {
        prop41: 41,
      },
    },
  },
  prop12: 12,
};

const protoCase1 = {
  prop11: {
    prop22: {
      prop32: null,
      prop33: null,
    },
  },
};

const resultCase1 = {
  prop11: {
    prop22: {
      prop32: 32,
      prop33: {
        prop41: 41,
      },
    },
  },
};

console.log(
  'example 1: ',
  JSON.stringify(objectProjection(srcCase1, protoCase1))
);
console.log('assumed 1: ', JSON.stringify(resultCase1));

// === Case 2 ===
const srcCase2 = {
  prop22: null,
  prop33: {
    prop331: 1,
    prop332: 2,
  },
  prop11: {
    prop111: 'value',
    prop112: {
      prop112: null,
    },
  },
};

const protoCase2 = {
  prop11: {
    prop22: null,
    prop111: {
      prop111: null,
    },
    prop112: null,
  },
  prop33: {},
  prop22: null,
};

const resultCase2 = {
  prop11: {
    prop112: {
      prop112: null,
    },
  },
  prop33: {
    prop331: 1,
    prop332: 2,
  },
  prop22: null,
};

console.log(
  'example 2: ',
  JSON.stringify(objectProjection(srcCase2, protoCase2))
);
console.log('assumed 2: ', JSON.stringify(resultCase2));

// === Case 3 ===
const srcCase3 = {
  p1: { p11: { p111: 111 } },
  p2: { p21: { p211: 211 } },
  p3: { p31: { p311: 311 } },
};

const protoCase3 = {
  p1: null,
  p2: { p21: { p211: null } },
  p3: { p31: { p311: { p4111: null } } },
};

const resultCase3 = {
  p1: { p11: { p111: 111 } },
  p2: { p21: { p211: 211 } },
};

console.log(
  'example 3: ',
  JSON.stringify(objectProjection(srcCase3, protoCase3))
);
console.log('assumed 3: ', JSON.stringify(resultCase3));
// ==============
