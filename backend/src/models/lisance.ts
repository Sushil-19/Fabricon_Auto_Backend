import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Lisances extends Model {
  public id!: number;
  public lisance_key!: string;
  public allowed_users!: number;
  public valid_upto!: Date;
  public licenseKey!: string;
  public expirationDate!: Date;
  public isActive!: boolean;
  public companyId!: number;
}

Lisances.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    lisance_key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    allowed_users: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valid_upto: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    licenseKey: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expirationDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    companyId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Lisances',
  }
);

export default Lisances;
