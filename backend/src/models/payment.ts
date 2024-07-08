import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Payment extends Model {
  public id!: number;
  public transaction_id!: string;
  public amount!: number;
  public created_at!: Date;
}

Payment.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  transaction_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Payment',
});

export default Payment;
