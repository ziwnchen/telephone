import React from "react";

import {Centered, ConsentButton} from "meteor/empirica:core";

export default class Consent extends React.Component {
  render() {
    return (<Centered>
      <div className="consent">
        <h1>
          Consent Form
        </h1>
        <h2>INFORMED CONSENT</h2>
        <p>Study: Information recall</p>
        <h2>I. STUDY DESCRIPTION</h2>
        <p>We are asking you to take part in a research study sponsored by
          Bocconi University under the direction of Professor Pedro Aceves.
          If you have any questions about this research you may contact Pedro Aceves
          at pedro.aceves@unibocconi.it. If, at any time, you have questions
          about your rights as a research participant, you may contact the
          Ethics Committee secretariat at Bocconi University: ethics@unibocconi.it.
          The Ethics Committee is a board organized to protect the rights and
          welfare of participants involved in research.</p>
        <h2>II. STUDY OVERVIEW</h2>
        <p>The purpose of this study is to investigate the process of information
          recall. The complete objectives of the research will not be described
          in advance, as doing so might influence the outcomes, but participants
          will have an opportunity to receive a complete explanation of the study
          following its completion. The study will consist of viewing information
          on a screen and then recalling this information in the following screens.
          he study will also consist of adding parts to a story. This experimental
          session is expected to last 20 minutes.</p>
        <p>If you agree to be part of the research study, you will be asked to
          view information on a computer screen and then recall this information
          in future screens. You will have access to information about past
          participants’ recalled information. Therefore, future participants
          may have indirect access to your own recalled information.
          Your identity will not be revealed during or after the experiment.</p>
        <h2>III. RISKS</h2>
        <p>There are no foreseeable risks or discomforts to you in filling out
          the questionnaire or completing the tasks beyond those ordinarily
          encountered in daily life or during the performance of routine physical
          or psychological examinations or tests.</p>
        <h2>IV. BENEFITS</h2>
        <p>There are no direct benefits that will come to you for participating
          in this survey. However, there are indirect benefits arising from the
           potential of the survey to provide valuable information about the
           psychological processes underlying many important yet everyday
           behaviors. Your participation in this survey will therefore be
           of scientific value by contributing to our understanding of how
           individuals recall information.</p>
        <h2>V. COMPENSATION</h2>
        <p>We thank you for your participation. To compensate you for your time,
           you will earn the specified rate provided by the survey company
           contacting you for your participation. You may choose to withdraw your
            data at any time before publication. Please notify us by emailing
            pedro.aceves@unibocconi.it, if you wish to formally withdraw from
            the experiment after you have completed the session.</p>
        <h2>VI. CONFIDENTIALITY</h2>
        <p>To ensure confidentiality and to guarantee internationally-accepted
          replicability standards, data will be analyzed and stored with code
          numbers, never with any information that could be used to identify
          participants. Data will be kept on secure servers, password-protected
          computers, and protected university data storage sites for
          replication purposes. The data will be stored after the termination
          of the current research for a period no shorter than 6 years, and
          at no time will any identifying information about the participants be
          stored along with the data. All of your responses will be held in
          confidence. Anonymized records may be shared with other professionals,
           authorities, or researchers who may be evaluating or replicating the study.</p>
        <h2>VII. VOLUNTARY PARTICIPATION</h2>
        <p>Participation in this study is completely voluntary and non-coercive
          with no negative consequences for refusal to participate. You may
          choose to leave the study at any point if you experience discomfort or
          find that there are any parts of this study that you do not wish to complete.
          Finally, you may refuse to complete any of the questionnaires or refuse to
           partake in any of the tasks without penalty or negative consequences.</p>
         <h2>VIII. ADDITIONAL INFORMATION FOR PARTICIPANTS</h2>
         <p>UNIVERSITA’ COMMERCIALE “LUIGI BOCCONI”, having its registered office
           in Milano at via Sarfatti 25, hereby declares that it falls within the
           field of application General Data Protection Regulation n. 679/2016 dealing
           with the protection of personal data, with reference to the use of the
           data subject’s personal data that is specifically indicated above.</p>

         <h2>IX. PARTICIPANT'S STATEMENT</h2>
          <p>I have read the study description and I volunteer to take part in
            this research. If I have questions about the research, I can ask
            the researcher listed above. I understand that I may refuse to
            participate or withdraw from participation at any time. I certify
            that I am 18 years of age or older and freely give my consent to
            participate in this study.</p>

        <br/>
        <b>
          <i>As evidence that you consent to participate in the experiment,
            please choose "yes" from the drop down menu in the next question. </i>
        </b>
        <br/>
        <br/>
        <ConsentButton text="I AGREE"/>
      </div>
    </Centered>);
  }
}
