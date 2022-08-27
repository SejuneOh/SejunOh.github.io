---
slug: Upstream, DownStream
title: Upstream, DownStream
authors: june
tags: [hello, docusaurus]
---
# Github의 upStream, downStream ?

과거의 소스관리를 하면서, window OS에서만 사용하던 TortoiseGit를 사용 하다.  
웹의 FrontEnd를 공부하면서 다시 Git과 Github를 사용해서 프로젝트 소스관리를 하려고했는데.
*upStream, DownStream*의 개념이 안잡혀 찾아보고 이해한 내용을 공유하려고 합니다.

---
<!--more-->

## Git vs Github?

맨처음 git을 알았을 때는 git과 github는 같은 내용을 말하는 줄 알았어요.  
제대로 공부를 안한 것이지요... git은 VCS(Version Control System), SCM(Source Control Managment)라고 말하는 형상관리 시스템, 즉 소스의 버전 및 기록 관리를 도와주는 프로그램이고, Github는 그 버전관리 시스템은 원격으로 지원해주고 관리를 도와주는 서비스 시스템을 말합니다.

일단 개념은 알고 접근하니깐 이해가 쑥쑥 되더라구요 자 이제 메인 주제 upstream, down스트림에 대해서 알아봐요.

## UpStream, DownStream

이 둘의 단어를 들어보셨을 것 입니다. 언제?

- 팀장님이 관리하는 소스를 Fork로 가져왔는데. 팀장님이 upstream으로 업데이트 해라
- 팀 프로젝트를 하는데, 팀장이 downstream에서 작업한거 PR해주세요..

이게 무슨 말이지 했을 수도 있을 것 같아요, 일단 이 둘은 상대적인 개념입니다.  
upStream은 메인으로 관리되고 있는 원격 저장소를 가르킵니다.  
downStream은 하위에서 개발하고, 업데이트하고, 수정하는 환경을 가르키는 것이구요

이해하기 쉽게 다음 두 상황을 보고 비교해보고 차이를 볼까요 ?

1. _내가 혼자 스스로 프로젝트를 github로 관리했을 때_  
   여기서 upStream은 제가 만든 github의 remote(repo)를 말합니다. 그리고 down 스트림은 제가 작업하는 local환경이 됩니다.

1. _협업에서 다른 사람의 프로젝트에서 Fork(상대방의 소스를 자신의 repo로)에서 작업할때_.  
   여기서는 upStream은 소스를 Fork해서 가져온 상대방의 원격 repo를 말하고, 자신의 관리하고 실행하는 repo및 환경을 downStream을 말합니다.

두 가지의 차이점이 느껴지시나요?  
전자는 하나로 소스를 관리하고, 후자는 다른 사람의 소스를 가져와 협업을 할 때, 소스를 개발하는 환경이 차이가 있었죠 upStream, downStream은 상대적으로 소스가 관리 되고있는 Main 환경을 upstream을 말하고, 그 외 소스가 개발되고 하위에서 개발되는 환경을 말합니다.

이해가 되셨을까요? 업로드, 다운로드의 개념 보다는 관리가 되고있는 환경의 상대적인 기준으로 나누어 표현합니다. 그래서 협업시에는 하위 downStream에서 main으로 소스를 관리하는 upStream 계정 브랜치를 나누어 소스를 업로드하는 개념의 branch와 개발 및 수정하는 branch를 나누어 역할을 정해서 사용합니다.

조금은 헷갈리는 개념이라 공유하고 싶어 이렇게 작성해서 포스트에 올리는데 많은 도움이 되었으면 좋겠습니다.
