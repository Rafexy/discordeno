import { Bot } from "../../bot.ts";
import { ThreadMembersUpdate } from "../../types/channels/threads/threadMembersUpdate.ts";
import { DiscordGatewayPayload } from "../../types/gateway/gatewayPayload.ts";
import { SnakeCasedPropertiesDeep } from "../../types/util.ts";

export async function handleThreadMembersUpdate(bot: Bot, data: DiscordGatewayPayload) {
  const payload = data.d as SnakeCasedPropertiesDeep<ThreadMembersUpdate>;
  bot.events.threadMembersUpdate(bot, {
    id: bot.transformers.snowflake(payload.id),
    guildId: bot.transformers.snowflake(payload.guild_id),
    addedMembers: payload.added_members?.map((member) => bot.transformers.threadMember(bot, member)),
    removedMemberIds: payload.removed_member_ids?.map((id) => bot.transformers.snowflake(id)),
  });
}
