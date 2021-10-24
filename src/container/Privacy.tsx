import React, { ReactElement } from 'react'
import { Typography, Divider, PageHeader } from 'antd';
import { useHistory } from "react-router-dom"
interface Props {

}

export default function Privacy({ }: Props): ReactElement {
    let history = useHistory()
    return (
        <>
            <PageHeader
                className="site-page-header"
                onBack={() => history.goBack()}
                title="개인정보 처리 방침"
                subTitle="개인정보 처리 방침"
            />
                <Typography style={{margin: "0 30px", textAlign:"left"}}>
                    <Typography.Paragraph>
                        "해브런치 ('http://havelunch.kr'이하 '해브런치')은(는) 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다. <br /><br />

○ 이 개인정보처리방침은 2021년 10월 1부터 적용됩니다.<br /><br />
제1조(개인정보의 처리 목적)<br /><br />
해브런치 ('http://havelunch.kr'이하 '해브런치')은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.<br /><br />

1. 홈페이지 회원가입 및 관리<br /><br />

회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리 목적으로 개인정보를 처리합니다.<br /><br />


2. 재화 또는 서비스 제공<br /><br />

맞춤서비스 제공을 목적으로 개인정보를 처리합니다.<br /><br />


3. 마케팅 및 광고에의 활용<br /><br />

신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공 , 서비스의 유효성 확인 등을 목적으로 개인정보를 처리합니다.<br /><br /><br />

제2조(개인정보의 처리 및 보유 기간)<br /><br />

①  해브런치 은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.<br /><br />

② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.<br /><br />

1.홈페이지 회원가입 및 관리<br />
홈페이지 회원가입 및 관리와 관련한 개인정보는 수집.이용에 관한 동의일로부터 영구까지 위 이용목적을 위하여 보유.이용됩니다.<br />
보유근거 : 서비스의 원할한 이용<br />
관련법령 : 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년<br />
예외사유 :<br />


제3조(개인정보의 제3자 제공)<br /><br />

① 해브런치은(는) 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.<br /><br />

② 해브런치은(는) 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.<br /><br />

                        <br />

제4조(개인정보처리 위탁)<br />

① 해브런치은(는) 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.<br /><br />

② 해브런치은(는) 위탁계약 체결시 「개인정보 보호법」 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.<br /><br />

③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.<br /><br />


                        <br />
제5조(정보주체와 법정대리인의 권리·의무 및 그 행사방법)<br /><br />



① 정보주체는 해브런치에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.<br /><br />

② 제1항에 따른 권리 행사는해브런치에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 해브런치은(는) 이에 대해 지체 없이 조치하겠습니다.<br /><br />

③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.<br /><br />

④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.<br /><br />

⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.<br /><br />

⑥ 해브런치은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.<br /><br />



제6조(처리하는 개인정보의 항목 작성)<br /><br />

① 해브런치은(는) 다음의 개인정보 항목을 처리하고 있습니다.<br /><br />

1 홈페이지 회원가입 및 관리 <br />
필수항목 : 이메일, 로그인ID, 이름, 회사명, 서비스 이용 기록, 접속 로그<br /><br />
선택항목 :<br /><br />


제7조(개인정보의 파기)<br /><br />


① 해브런치 은(는) 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.<br /><br />

②  개인정보 파기의 절차 및 방법은 다음과 같습니다.<br /><br />
1. 파기절차
해브런치 은(는) 파기 사유가 발생한 개인정보를 선정하고, 해브런치 의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.<br /><br />

2. 파기방법<br /><br />

전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다<br /><br />



제8조(개인정보의 안전성 확보 조치)<br /><br />

해브런치은(는) 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.<br /><br />

1. 개인정보 취급 직원의 최소화 및 교육<br /><br />
개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.<br /><br />




제9조(개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항)<br /><br />



해브런치 은(는) 정보주체의 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용하지 않습니다.<br /><br />

제10조 (개인정보 보호책임자)<br /><br />

① 해브런치 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.<br /><br />

▶ 개인정보 보호책임자<br /><br />
성명 :송지혁<br />
직책 :매니저<br />
직급 :매니저<br />
연락처 :01065424796, porr3444@naver.com,<br />
※ 개인정보 보호 담당부서로 연결됩니다.<br />

▶ 개인정보 보호 담당부서<br />
부서명 :운영<br />
담당자 :송지혁<br />
연락처 :01065424796, porr3444@naver.com,<br />
② 정보주체께서는 해브런치 의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 해브런치 은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
<br />
제11조(개인정보 열람청구)<br />
정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다.<br />
해브런치은(는) 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.<br />
                        <br />
▶ 개인정보 열람청구 접수·처리 부서<br />
부서명 : 운영<br />
담당자 : 송지혁<br />
연락처 : 01065424796, ,<br />

                        <br />
제12조(권익침해 구제방법)<br />



정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
<br /><br />
1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)<br />
2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)<br />
3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)<br />
4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)<br />

「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.
<br /><br />
※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.
<br /><br />
제13조(개인정보 처리방침 변경)<br /><br />
                        <br />
    
① 이 개인정보처리방침은 2021년 10월 1부터 적용됩니다. "
<Divider/>
</Typography.Paragraph>
                </Typography>

        </>
    )
}