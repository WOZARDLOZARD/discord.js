'use strict';

const GuildChannel = require('./GuildChannel');

/**
 * Represents a guild stage channel on Discord.
 * @extends {GuildChannel}
 */
class StageChannel extends GuildChannel {
    /**
     * @param {*} guild The guild the stage channel is part of
     * @param {*} data The data for the stage channel
     */
    constructor(guild, data) {
        super(guild, data);
    }

    _patch(data) {
        super._patch(data);
    }
}

module.exports = StageChannel;