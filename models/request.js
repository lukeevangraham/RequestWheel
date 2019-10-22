module.exports = function(sequelize, DataTypes) {
  var Request = sequelize.define("Request", {
    // name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // },
    // phone: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   validate: {
    //     len: [1]
    //   }
    // },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    eventName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    submittedDate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    requestDueDate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    approver: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    approverEmail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    letterFlyer: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    halfSheetFlyer: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    quarterSheetFlyer: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    tvGraphic: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    tabloidPoster: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    mediumPoster: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    largePoster: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    fourByEightBanner: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    otherDesignFormat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    plainCopyPaper: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    coloredCopyPaper: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hammermillPaper: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    cardstock: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    collate: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    stack: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    holePunch: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    staple: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    forNewsletter: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    forAnnVideo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    forTVScreens: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    forConnectionCard: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  });
  return Request;
};
