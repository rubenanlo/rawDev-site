import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import ProfileDropDown from "components/dashboard/sidebar/ProfileDropDown";
import SearchBar from "components/dashboard/sidebar/SearchBar";
import ButtonOpenDrawer from "components/dashboard/sidebar/ButtonOpenDrawer";
import SideBarMobile from "components/dashboard/sidebar/SideBarMobile";
import SideBarDesktop from "components/dashboard/sidebar/SideBarDesktop";
import MainContent from "components/dashboard/MainContent";
import { playlistIdState } from "atoms/playlistAtom";
import useSpotify from "helpers/useSpotify";
import DashboardLayout from "layouts/DashboardLayout";

const Dashboard = ({ providers }) => {
  // console.log(providers);
  const { data: session } = useSession();
  const [playlists, setPlaylists] = useState([]);
  console.log("🚀 ~ file: Dashboard.js:18 ~ Dashboard ~ playlists:", playlists);
  // const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
  const [searchedArtist, setSearchedArtist] = useRecoilState(playlistIdState);
  const spotifyApi = useSpotify();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      // getUserPlaylists() returns 20 playlists by default, by adding an object
      // as a parameter and specifying the limit, we can get up to 50 playlists
      spotifyApi.getUserPlaylists({ limit: 50 }).then((data) => {
        setPlaylists(data.body.items);
      });
      spotifyApi
        .getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE", { limit: 10 })
        .then((data) => {
          setSearchedArtist(data.body.artists);
        });
    }
  }, [session, spotifyApi, searchedArtist]);

  // console.log("🚀 ~ file: SideBar.js:25 ~ SideBar ~ playlists:", playlists);
  // console.log(searchedArtist);

  return (
    <DashboardLayout>
      <SideBarMobile />
      <SideBarDesktop />
      <ButtonOpenDrawer />
      <SearchBar />
      <ProfileDropDown providers={providers} />
      <MainContent />
    </DashboardLayout>
  );
};

export default Dashboard;
