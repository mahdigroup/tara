import mongoose from 'mongoose';

import { getEnvValue } from 'configs/app/utils';

import { FaucetRequestRecord } from './model';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
mongoose.connect(getEnvValue('DATABASE_URL')!);

export function createAndSaveRecord(discordId: string, discordUsername: string) {
  const doc = new FaucetRequestRecord({
    discord_id: discordId,
    discord_username: discordUsername,
    request_wallet: [],
    last_request_time: '0',
  });
  return doc.save();
}

export function findOneByDiscordId(discordId: string) {
  return FaucetRequestRecord.findOne({
    discord_id: discordId,
  });
}

export async function findEditThenSave(discordId: string, userWallet: string, faucetRequestTime: string) {
  const doc = await findOneByDiscordId(discordId);
  if (doc) {
    doc.last_request_time = faucetRequestTime;
    if (!doc.request_wallet.includes(userWallet)) {
      doc.request_wallet.push(userWallet);
    }
    return doc.save();
  }
}
