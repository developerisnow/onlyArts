export const STORAGE_COST: bigint = BigInt("1000000000000000000000")

export class Donation {
  account_id: string;
  total_amount: string;
}

export class Comment {
  likes: number;
  text: string;
}