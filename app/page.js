import HomeContent from './components/homecontent';

export default async function Home() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${token}`;

  let posts = [];
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch Instagram data: ${response.status}`);
    }
    const data = await response.json();
    posts = data.data || [];
  } catch (error) {
    console.error(error);
    posts = [];
  }

  return (
    <div>
      <HomeContent igData={posts} />
    </div>
  );
}
