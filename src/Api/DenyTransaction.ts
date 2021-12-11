import type { ITransaction, ITransactionFail } from '../Interfaces';
import ApiRequest from '../Util/ApiRequest';
import MidtransNodeError from '../Util/MidtransNodeError';

export default async function DenyTransaction(
	isProduction: boolean,
	orderID: string,
	token: string
): Promise<ITransaction | ITransactionFail | undefined> {
	try {
		const { data }: { data: ITransaction | ITransactionFail } =
			await ApiRequest(isProduction, 'v2', token).post(`/${orderID}/deny`);
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
