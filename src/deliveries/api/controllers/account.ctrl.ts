import { Account } from '../../../application/entities/types/account';

export default class AccountCtrl {
  constructor() { }

  async list(req, res) {
    const business = req.container.resolve('getAccountsBusiness');

    try {
      const accounts: Account[] = await business
        .getByUserId(req.params.userId);
      res.json({ status: 200, data: accounts });
    } catch (error) {
      res.status(500).json({ status: 500, error_type: 'system', errors: error });
    }
  }

  async create(req, res) {
    const business = req.container.resolve('createAccountBusiness');

    try {
      const account: Account = await business
        .create(
        parseInt(req.params.userId),
        req.body.description,
        req.body.balance
        );
      res.json({ status: 200, data: account });
    } catch (error) {
      res.status(500).json({ status: 500, error_type: 'system', errors: error });
    }
  }
}
