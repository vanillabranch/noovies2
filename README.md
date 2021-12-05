# noovies2
expo를 사용하지않고, 네이티브로 앱 개발하기.

※expo sdk에도 접근가능하고, native영역에도 접근이 가능한 create react native app을 사용할 예정임.

#1.최초 설치 및 환경변수 셋팅, 구동해보기

1. https://reactnative.dev/ 이동 후, Get Started 클릭

2. Enviroment setup 클릭 후
   -> 아래 펼쳐진 메뉴에서 Setting up the development environment 클릭

3. Chocolatey를 먼저 다운로드 받는다(몇 줄만 내려오면 있음)
   여러 패키지를 묶어서 내보낸 형태로, 관련 소프트웨어들을 한번에 받을수 있게
   도와주는 프로그램이다. node.js(12버전이상)와 openJDK(8이상)도 당연히 설치되어 있어야 한다.

4. 안드로이드 스튜디오도 설치 sdk와 sdk 플랫폼, 버츄얼 디바이스(설치하다 보면 있음)

5. 파워쉘 관리자모드로 해서 다 받아버린다.(choco  명령 활용)

6. 환경변수는 재부팅 후 반영된다

※설치확인
node -v
java -version
git -v

※expo의 경우, 윈도우환경에서 제작하면 android, ios, native web 3개의 플랫폼을
expo자체서버를 통해 빌드 및 배포가 가능했지만, 네이티브의 장점을활용할수 없었음.
진정한 네이티브를 활용하기 위해, 해당 개발환경을 각각 받아서 설치해야함.

※react-native init 으로 하지않는다. (아무것도 설정되있지 않기 때문)

7. 다 설치됬으면 테스트를 해보자. 일단 테스트는 (react-native init 할꺼임)

8. 파워쉘 관리자 모드 실행 후 원하는 경로로 이동한 다음 npx react-native init AwesomeProject  호출.

9. 다 받아지고 나면, vs code나 webstorm으로 오픈.

10. npx react-native start 이거 호출.

11. 터미널에서 테스트앱을 구동해보기위해(잘 설치 되었는지) npx react-native run-android 또는 npm run android 호출....기다리자.

12. 오류나면, 안드로이드 스튜디오에서 빈프로젝트 만든다음, 에뮬레이터를 한번 실행한다음 11번 부터 다시 호출하자

13. 노드는 최신버전으로 깔려있다면 오류가 나있을것.. 다시 지우고 받자.(커렌트 버전)

14. 다열리고 나면, metro cmd 닫지말자, 서버임.

15. app.js에서 수정도 해보고, 반영되는지도 보자

16. 잘되면 이제 이 소프트웨어는 끝. (테스트였으니깐.)

※ ignite를 사용하는것도 괜찮다, 왠만한 설정도 다되있고, 설계를 어떻게 할지 좋은아이디어가 떠오르기 때문이다. 폴더구조 등



#2. 본격 앱 만들기

1. cli에서 입력 <br>
   npx create-react-native-app


2. 이름입력(본인이 원하는거) <br>
   noovies


3. 템플릿 선택 <br>
   기본으로


4. 다운완료 후 툴에서 열기<br>
   안드로이드 스튜디오 말고 vscode나 webstorm


5. 시뮬레이터까지 실행해서 잘 동작하는지 확인<br>
   npm run android 로 실행


※package.json 보면 왜 expo로 되어있는지 모르겠는데, android 명령구문을 react-native run-android  이걸로 바꾸자

여기까지 하면 무조건 오류가 날꺼다. 그럼 아래와 같이 진행하자.

--------------------------------------------------------------
react-native 최초 설치 후 안드로이드 스튜디오로 실행할 경우 위와 같은 오류 발생할때

[패키지명]/android/app/src/main/assets 폴더가 있는지 확인하고 없으면 생성

[패키지명]/android 폴더에서 ./gradlew clean 실행 (생략가능)

[패키지명] 폴더에서 아래 명령어 실행

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

react-native run-android
(코드를 새로작성한것이 반영 안될 때도)

순서대로 처리하자.

---------------------------------------------------------------

6. 창 분할<br>
   콘솔1에선 npm start<br>
   콘솔2에선 npm run android<br>
   메트로 서버를 유지하면서 앱만 빌드하기 위함.<br>
   그리고 이제 메트로 서버 콘솔에서 r만눌러서 처리할수 있다.<br>


7. 무언가 패키지를 설치할땐, 앱시뮬레이터에서 앱자체를 꺼버리고, 
다시 켜는 방식으로한다.
+ npm start 재시작.필수

---------------------------------------------------------------

리액트 네이티브 네비게이터 쓰려면?

https://reactnavigation.org/docs/getting-started
설치 : npm install @react-navigation/native
create-react-native-app 을 사용했다면, 아래 구문도 호출하여 설치
expo install react-native-screens react-native-safe-area-context

나머지 java수정 부분이나 등등.. create-react-native-app 을 했다면 안해도된다.

※그리고...혿따옴표를 자주 써주자.

컴포넌트명은 항상 대문자, 잊지말자 컴포넌트가 할당되는 변수도 대문자로 시작.

근데 컴포넌트는 항상 리턴이 있지 않았나?????? App()에서만 필요한건가...?

그리고.... 매 js파일마다 import React from 'react'; 이건 필수다.

---------------------------------------------------------------
