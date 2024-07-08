import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class AccountTypes extends Model {
  public id!: number;
  public type!: string;
}

AccountTypes.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'AccountTypes',
});

export default AccountTypes;
