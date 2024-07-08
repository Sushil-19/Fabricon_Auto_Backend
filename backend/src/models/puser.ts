import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import AccountTypes from './accountTypes';
import Roles from './role';
import Organizations from './organization';
import Lisances from './lisance';

class PUsers extends Model {
  public id!: number;
  public fname!: string;
  public username!: string;
  public email!: string;
  public ac_type_id!: number;
  public role_id!: number;
  public org_id!: number;
  public password!: string;
  public is_verified!: boolean;
  public last_login!: Date;
  public lisance_id!: number;
  public contact_number!: string;
  public address!: string;
  public created_at!: Date;
}

PUsers.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  ac_type_id: {
    type: DataTypes.INTEGER,
    references: {
      model: AccountTypes,
      key: 'id',
    },
  },
  role_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Roles,
      key: 'id',
    },
  },
  org_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Organizations,
      key: 'id',
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  last_login: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  lisance_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Lisances,
      key: 'id',
    },
  },
  contact_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'PUsers',
});

export default PUsers;
