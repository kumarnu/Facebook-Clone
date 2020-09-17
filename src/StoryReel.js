import React from 'react'
import { useStateValue } from './StateProvider';
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
  const [{ user }, dispatch] = useStateValue();
    return (
      <div className="storyReel">
        {/* Story */}
        <Story
          image={user.photoURL}
          profileSrc={user.photoURL}
          title={user.displayName}
        />
        {/* Story */}
        <Story
          image="https://i.insider.com/5db05a564af90978482d15b2?width=1100&format=jpeg&auto=webp"
          profileSrc="https://www.biography.com/.image/t_share/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg"
          title="Jeff"
        />
        {/* Story */}
        <Story
          image="https://vvazw1o18pf4bhdd434btzh7-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Mark-Zuckerberg-Spooks-the-Internet-With-Too-Much-Sunscreen-on-His-Face-in-Hawaii-01-1-1080x675.jpg"
          profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
          title="Mark"
        />
        {/* Story */}
        <Story
          image="https://cdn.geekwire.com/wp-content/uploads/2020/06/bill-gates-aaas-5.jpg"
          profileSrc="https://image.cnbcfm.com/api/v1/image/105894487-15571466884731u8a0054r.jpg?v=1585159939&w=1400&h=950"
          title="Bill Gates"
        />
        <Story
          image="https://www.thehindu.com/news/national/iogff3/article30067660.ece/alternates/FREE_435/BRICS-SUMMITLEADERSTHNAK"
          profileSrc="https://yt3.ggpht.com/a/AATXAJwSoCmMsUVbQ-BvJrtWN8rS-7-XlTGrLVAzqPU-xqc=s900-c-k-c0xffffffff-no-rj-mo"
          title="Narendra Modi"
        />
        <Story
          image="https://c.ndtvimg.com/2020-09/2inr2c1g_arvind-kejriwal-_625x300_05_September_20.jpg"
          profileSrc="https://timesofindia.indiatimes.com/thumb/msid-77733792,width-1200,height-900,resizemode-4/.jpg"
          title="Arvind Kejriwal"
        />
        <Story
          image="https://www.usnews.com/dims4/USNEWS/5bf4a8a/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fae%2Fdb%2F2e552d164703bab229e532734ee4%2F171108-10thingsobama-editorial.jpg"
          profileSrc="https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg"
          title="Barak Obama"
        />
      </div>
    );
}

export default StoryReel
