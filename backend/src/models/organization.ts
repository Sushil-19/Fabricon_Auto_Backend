import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Organizations extends Model {
  public id!: number;
  public org_name!: string;
  public org_size!: string;
  public created_at!: Date;
}

Organizations.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  org_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  org_size: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Organizations',
});

export default Organizations;
