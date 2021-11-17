import type { Bot } from "../../../bot.ts";
import type { ListActiveThreads } from "../../../types/channels/threads/listActiveThreads.ts";
import { Collection } from "../../../util/collection.ts";
// import { channelToThread } from "../../../util/transformers/channel_to_thread.ts";

/** Returns all active threads in the guild, including public and private threads. Threads are ordered by their `id`, in descending order. */
export async function getActiveThreads(bot: Bot, guildId: bigint) {
  // const result = (await bot.rest.runMethod(
  //   bot.rest,
  //   "get",
  //   bot.constants.endpoints.THREAD_ACTIVE(channelId)
  // )) as ListActiveThreads;
  // const threads = new Collection(
  //   result.threads.map((t) => {
  //     const ddThread = channelToThread(t);
  //     return [ddThread.id, ddThread];
  //   })
  // );
  // for (const member of result.members) {
  //   const thread = threads.get(bot.transformers.snowflake(member.id!));
  //   thread?.members.set(bot.transformers.snowflake(member.userId!), {
  //     userId: bot.transformers.snowflake(member.userId!),
  //     flags: member.flags,
  //     joinTimestamp: Date.parse(member.joinTimestamp),
  //   });
  // }
  // return threads;
}