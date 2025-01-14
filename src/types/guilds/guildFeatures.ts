/** https://discord.com/developers/docs/resources/guild#guild-object-guild-features */
export enum GuildFeatures {
  /** Guild has access to set an invite splash background */
  InviteSplash = "INVITE_SPLASH",
  /** Guild has access to set 384kbps bitrate in voice (previously VIP voice servers) */
  VipRegions = "VIP_REGIONS",
  /** Guild has access to set a vanity URL */
  VanityUrl = "VANITY_URL",
  /** Guild is verified */
  Verified = "VERIFIED",
  /** Guild is partnered */
  Partnered = "PARTNERED",
  /** Guild can enable welcome screen, Membership Screening, stage channels and discovery, and recives community updates */
  Community = "COMMUNITY",
  /** Guild has access to use commerce features (i.e. create store channels) */
  Commerce = "COMMERCE",
  /** Guild has access to create news channels */
  News = "NEWS",
  /** Guild is able to be discovered in the directory */
  Discoverable = "DISCOVERABLE",
  /** guild cannot be discoverable */
  DiscoverableDisabled = "DISCOVERABLE_DISABLED",
  /** Guild is able to be featured in the directory */
  Feature = "FEATURABLE",
  /** Guild has access to set an animated guild icon */
  AnimatedIcon = "ANIMATED_ICON",
  /** Guild has access to set a guild banner image */
  Banner = "BANNER",
  /** Guild has enabled the welcome screen */
  WelcomeScreenEnabled = "WELCOME_SCREEN_ENABLED",
  /** Guild has enabled [Membership Screening](https://discord.com/developers/docs/resources/guild#membership-screening-object) */
  MemberVerificationGateEnabled = "MEMBER_VERIFICATION_GATE_ENABLED",
  /** Guild can be previewed before joining via Membership Screening or the directory */
  PreviewEnabled = "PREVIEW_ENABLED",
  /** Guild has enabled ticketed events */
  TicketedEventsEnabled = "TICKETED_EVENTS_ENABLED",
  /** Guild has enabled monetization */
  MonetizationEnabled = "MONETIZATION_ENABLED",
  /** Guild has increased custom sticker slots */
  MoreStickers = "MORE_STICKERS",
  /** Guild has access to the three day archive time for threads */
  ThreeDayThreadArchive = "THREE_DAY_THREAD_ARCHIVE",
  /** Guild has access to the seven day archive time for threads */
  SevenDayThreadArchive = "SEVEN_DAY_THREAD_ARCHIVE",
  /** Guild has access to create private threads */
  PrivateThreads = "PRIVATE_THREADS",
  /** Guild is able to set role icons */
  RoleIcons = "ROLE_ICONS",
}
