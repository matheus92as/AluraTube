import React from "react";
import config from "../config.json";
import styled from "styled-components";

import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { Favorites } from "../src/components/Favorites";

function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
    <>
        <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
        }}>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
        <Favorites channelList={config.favorites} />
        </div>
    </>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner = styled.div`
    background-color: blue;
    background-image: url(${({ bg }) => bg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 230px;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg}/>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.description}</p>
        </div>
      </section>
    </StyledHeader>
  );
}
function Timeline({searchValue, ...props}) {
  const playlistNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized)
                }).
                map((video) => {
                  return(
                      <a href={video.url} key={video.thumb}>
                          <img src={video.thumb} />
                          <span>{video.title}</span>
                      </a>
                  )
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}