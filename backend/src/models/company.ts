import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface CompanyAttributes {
  id: number;
  companyName: string;
  industryType: string;
  websiteURL: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  termsAccepted: boolean;
  username: string;
  password: string;
}

interface CompanyCreationAttributes extends Optional<CompanyAttributes, 'id'> {}

class Company extends Model<CompanyAttributes, CompanyCreationAttributes> implements CompanyAttributes {
  public id!: number;
  public companyName!: string;
  public industryType!: string;
  public websiteURL!: string;
  public contactName!: string;
  public contactEmail!: string;
  public contactPhone!: string;
  public address!: string;
  public city!: string;
  public state!: string;
  public postalCode!: string;
  public country!: string;
  public termsAccepted!: boolean;
  public username!: string;
  public password!: string;
}

Company.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    industryType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    websiteURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactPhone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    termsAccepted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'companies',
  }
);

export default Company;
