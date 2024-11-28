import HomeContent from './components/homecontent';

export default async function Home() {
  const token = '';
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${token}`;

  let data = await fetch(url)
  let posts = await data.json()

  return (
    <div>
        <HomeContent igData={posts.data} />
    </div>
  );
}
