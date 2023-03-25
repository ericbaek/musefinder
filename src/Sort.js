import './DesignSystem/Import.js';
import ContentTitle from './DesignSystem/Component/In-Content/ContentTitle';
import Button from './DesignSystem/Component/In-Content/Button';
import Sortset from './DesignSystem/Component/In-Content/Sortset';

function Sort() {

  return (
    <div className="MainActivity"> { /* 메인 액티비티 */ }
      <ContentTitle Title="고르기" Paragraph="초기화"/>
      <div className="Group">
        <div className="ContentMenuText">건반형</div>
        <div className="Row">
          <Sortset Title="씨발"/>
        </div>
      </div>
      <Button Icon="" Title="저장"/>
    </div>
  );
}

export default Sort;