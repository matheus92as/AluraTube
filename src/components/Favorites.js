import styled from "styled-components";

const StyledFavs = styled.div`
width: 100%;
padding: 16px;
overflow: hidden;
h2 {
  font-size: 16px;
  margin-bottom: 16px;
  text-transform: capitalize;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  max-width: 210px;
}
section {
  width: 100%;
  padding: 0;
  overflow: hidden;
  padding: 16px;
  div {
    width: calc(100vw - 16px * 8);
    display: grid;
    grid-gap: 8px;    
    grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
    grid-auto-flow: column;
    grid-auto-columns: minmax(200px,1fr);
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    a {
        scroll-snap-align: start;
        span {
            text-align: center;
            padding-top: 8px;
            padding-left: 16px;
            display: block;
            padding-right: 24px;
            color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
    }
  }
}
`;

export function Favorites(props) {
    const favoriteChannels = Object.keys(props.channelList);
  
    return (
      <StyledFavs>
        {favoriteChannels.map((favoriteChannel) => {
          const channels = props.channelList[favoriteChannel];
          return (
            <section key={favoriteChannel}>
              <h2>{favoriteChannel} Favoritos</h2>
              <div>
                {channels.map((channel) => {
                  return(
                      <a href={channel.url} key={channel.url}>
                          <img src={channel.avatarUrl} />
                          <span>{channel.name}</span>
                      </a>
                  )
                })}
              </div>
            </section>
          );
        })}
      </StyledFavs>
    );
  }