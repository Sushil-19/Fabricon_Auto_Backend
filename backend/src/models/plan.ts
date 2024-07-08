import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import AccountTypes from './accountTypes';

class Plans extends Model {
  public id!: number;
  public plan_type!: string;
  public plan_desc!: string;
  public max_allowed_users!: number;
  public plan_price!: number;
  public features!: string;
  public ac_type_id!: number;
  public discount!: number;
}

Plans.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  plan_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  plan_desc: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  max_allowed_users: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  plan_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  features: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ac_type_id: {
    type: DataTypes.INTEGER,
    references: {
      model: AccountTypes,
      key: 'id',
    },
  },
  discount: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Plans',
});

export default Plans;
