import './DesignSystem/Import.js';
import Near from './Modules/Near';

import Alert from './DesignSystem/Component/In-Content/Alert';
import ContentTitle from './DesignSystem/Component/In-Content/ContentTitle';
import Card from './DesignSystem/Component/In-Content/Card';
import Search from './DesignSystem/Component/In-Content/Search';
import Sortset from './DesignSystem/Component/In-Content/Sortset';

function App() {

  /* Card */
  /* Right Accent 미사용 시 { NoAccent } 처리 */
  var NoAccent = { display : 'none' }
  /* 저장한 장소 및 근처 오락실까지의 거리를 기준으로 한 배경색 */
  var BGLocationNear = { background : 'hsl(213, 100%, 56%)', color : 'white' } /* < 5km */
  var BGLocationMedium = { background : 'hsl(39, 85%, 53%)', color : 'white' } /* < 10km */
  var BGLocationFar = { background : 'hsl(0, 79%, 56%)', color : 'white' } /* > 10km */

  return (
    <div className="System"> { /* 시스템 전반 Flex / Column / Padding / Gap */ }
      
      <div className="DesktopSearch"> { /* 데스크톱 환경에서의 검색창 + 메인 액티비티 */ }
        <div className="SearchTop">
          <Search Icon="" Placeholder="검색" Sort=""></Search>
          <div className="DesktopSearch-Sortset">
            <Sortset Text="IIDX"></Sortset>
            <Sortset Text="SDVX"></Sortset>
            <Sortset Text="유비트"></Sortset>
            <Sortset Text="팝픈뮤직"></Sortset>
          </div>
        </div>
        <div className="MainActivity"> { /* 메인 액티비티 */ }
          <div className="Group">
            <ContentTitle Title="저장한 장소" Paragraph="관리"></ContentTitle>
            <div className="Row Gap-8">
              <Card Title="펀시티 건대점" Paragraph="1.4km" AccentText="" Accent={ NoAccent }></Card>
              <Card Title="노원 노리존" Paragraph="4.8km" AccentText="" Accent={ NoAccent }></Card>
            </div>
          </div>
          <div className="Group"> { /* 그룹 내 Flex / Column / Gap */ }
            <ContentTitle Title="근처 오락실" Paragraph=""></ContentTitle>
            <div className="Column Group-Card">
              <Card Title="영등포 G2존" Paragraph="위치" AccentText="3.2km" Accent={ BGLocationNear }></Card>
              <hr></hr>
              <Card Title="목동 G스타디움" Paragraph="위치" AccentText="6.3km" Accent={ BGLocationMedium }></Card>
              <hr></hr>
              <Card Title="홍대 짱오락실" Paragraph="위치" AccentText="12km" Accent={ BGLocationFar }></Card>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
