import { Bot } from "../../../src/bot.ts";
import { CreateGuildChannel } from "../../../src/types/guilds/create_guild_channel.ts";
import { DiscordChannelTypes } from "../../../src/types/mod.ts";
import { assertExists, assertEquals } from "../../deps.ts";
import { delayUntil } from "../../utils.ts";
import { getAvailableVoiceRegions } from "../../../src/helpers/guilds/get_available_voice_regions.ts";

export async function getGuildTests(bot: Bot, guildId: bigint, t: Deno.TestContext) {
  const fetchedGuild = await bot.helpers.getGuild(guildId);

  // Assertions
  assertExists(fetchedGuild);
  assertEquals(fetchedGuild.id, guildId);
}
