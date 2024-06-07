import { auth } from "@/auth";
import getUserToken from "../../util/getUserToken";

import { guildResponse } from "@/types/guildsResponse";
import { pageInfo } from "../layout";

const getData = async () => {
  const access_token = await getUserToken();
  const guildRes = await fetch("https://discord.com/api/users/@me/guilds", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!guildRes.ok) {
    throw new Error("Failed to fetch");
  }

  const guilds: guildResponse[] = await guildRes.json();

  if (guilds.length > 0) {
    const filteredGuilds = guilds.filter(
      (guild) => (guild.permissions & 8) === 8
    );
    return filteredGuilds;
  }
  return null;
};
const Servers = async () => {
  pageInfo.title = "Servers";
  const session = await auth();

  if (session) {
    // const guildsState = await getData();
    const guildsState = null;
    return (
      <div>
        <p>Servers!</p>
        {guildsState !== null ? (
          <ul>
            {guildsState.map((guild) => {
              return <li key={guild.id}>{guild.name}</li>;
            })}
          </ul>
        ) : (
          <p>No Servers</p>
        )}
      </div>
    );
  }
  return <p>Not Logged In</p>;
};

export default Servers;
