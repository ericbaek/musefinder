import './DesignSystem/Import.js';
import Near from './Modules/Near';

import Alert from './DesignSystem/Component/In-Content/Alert';
import ContentTitle from './DesignSystem/Component/In-Content/ContentTitle';
import Card from './DesignSystem/Component/In-Content/Card';
import Search from './DesignSystem/Component/In-Content/Search';
import Sortset from './DesignSystem/Component/In-Content/Sortset';

import examplemap from './DesignSystem/Image/examplemap.png'

function App() {

  var NoAccent = { display : 'none' }
  var BGLocationNear = { background : 'hsl(213, 100%, 56%)', color : 'white' }
  var BGLocationMedium = { background : 'hsl(39, 85%, 53%)', color : 'white' }
  var BGLocationFar = { background : 'hsl(0, 79%, 56%)', color : 'white' }

  return (
    <div className="System">
      
      <div className="DesktopSearch">
        <div className="SearchTop">
          <Search Icon="" Placeholder="검색" Sort=""></Search>
          <div className="DesktopSearch-Sortset">
            <Sortset Text="IIDX"></Sortset>
            <Sortset Text="SDVX"></Sortset>
            <Sortset Text="유비트"></Sortset>
            <Sortset Text="팝픈뮤직"></Sortset>
          </div>
        </div>
        <div className="MainActivity">
          <div className="Group">
            <ContentTitle Title="저장한 장소" Paragraph="관리"></ContentTitle>
            <div className="Row">
              <Card Title="펀시티 건대점" Paragraph="3.2km" AccentText="" BGAccent={ BGLocationMedium } Accent={ NoAccent }></Card>
              <Card Title="노원 노리존" Paragraph="4.8km" AccentText="" BGAccent={ BGLocationFar }  Accent={ NoAccent }></Card>
            </div>
          </div>
          <div className="Group">
            <ContentTitle Title="근처 오락실" Paragraph=""></ContentTitle>
            <div className="Row">
              <Card Title="영등포 G2존" Paragraph="3.2km" AccentText="" BGAccent={ BGLocationNear } Accent={ NoAccent }></Card>
              <Card Title="목동 G스타디움" Paragraph="4.8km" AccentText="" BGAccent={ BGLocationMedium } Accent={ NoAccent }></Card>
              <Card Title="홍대 짱오락실" Paragraph="4.8km" AccentText="" BGAccent={ BGLocationMedium } Accent={ NoAccent }></Card>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
