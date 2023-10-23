import './krvn.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2 className="title">Karabiner 개인정보 처리방침</h2>
      <hr className="divider" />
      <div>
      <h1 className="scripttitle"> 1. 수집항목 </h1>
      <p className="script"> 가입시부터 수집되는 회원 정보는 다음과 같습니다 : 이름, 이메일, 휴대폰 번호, 사용자 위치, 사진, 카매라</p>
      </div>
      <div>
        <h1 className="scripttitle"> 2. 개인정보 수집 및 이용목적 </h1>
        <p className="script"> 이름, 이메일, 휴대폰 번호, 사용자 위치 : 신고시 신고자 정보로 사용 </p>
        <p className="script"> 사진 접근 권한, 카메라 : AI 자동 분석 프롬프트 및 신고 시 첨부자료에 사용 </p>
      </div>
      <div>
        <h1 className="scripttitle"> 3.  개인정보의 보유 및 이용기간 </h1>
        <p className="script"> 탈퇴시까지 모든 정보를 클라이언트 내부에 저장, 보관합니다. </p>
      </div>
      <div>
        <h1 className="scripttitle"> 4-1.  개인정보의 파기절차 </h1>
        <p className="script"> 회원이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다.
          일정기간 저장된 개인정보는 법령에 의한 경우를 제외하고는 보유 목적 이외의 다른 목적으로 이용되지 않습니다. </p>
      </div>
      <div>
        <h1 className="scripttitle"> 4-2.  개인정보의 파기방법 </h1>
        <p className="script"> 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다. </p>
      </div>
      <div>
        <h1 className="scripttitle"> 5.  개인정보 제공 </h1>
        <p className="script"> Karabiner는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다. 이용자들이 사전에 동의한 경우 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우. </p>
      </div>
    </div>
  )
}

export default App;
