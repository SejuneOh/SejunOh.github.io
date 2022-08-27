---
slug: Upstream, DownStream
title: Upstream, DownStream
authors: june
tags: [github, git]
---




<!-- 전달하고자 하는 내용 -->
<!-- 내용에 대한 신빙성 -->
<!--  잠고 자료 사이트 -->


<!-- 왜 이 글을 쓰게 된 목적 -->
팀 프로젝트를 하면서, 많은 사람들이 같은 환경에서 소스의 버전 관리를 해야한다는 것은 거의 대부분 알 것입니다.  
모든 개발을 시작하면서 Git, Github로 버전 관리 및 소스 관리를 하시면서, Repo의 admin에게 PR을 보내는 경험도 많이 해보셨을 것입니다. 여기서 upstream, downstream의 이야기를 들어 보셨을 것이라고 생각합니다.  
repository 기준으로 상대적인 개념인 두 단어에 대해서 정의한 내용을 포스팅 하려고 합니다.

---


## Git vs Github?

해당 단어의 개념을 알기 위해서는 아래의 Git과 Github의 개념을 이해해야 합니다.

### [Git](https://git-scm.com/)

- VSC(Version Control System) : 버전 관리를 도와주스는 시스템
- 소스의 버전 관리 및 사용자들의 커밋과 수정 내용을 정리해주고 기록한다.
- 관리하는 프로젝트 폴더에서 설정 및 소스 관리를 해준다.
- 병렬 개발이 가능하다.(동시에 파일 수정이 가능하다)


### [Github](https://github.com/)

- 원격으로(네트워크)상에서 소스 Git의 기능을 해주는 플랫폼입니다.
- 원격으로 소스 수정 및 내용을 취합하고, 내용을 기록해주고 소스를 저장해는 웹 플랫폼입니다.
- 소스 관리 및 접근 가능한 팀원 보안등 많은 기능을 제공해줍니다.

상대적으로 2개는 비슷해보이지만 개념은 다릅니다. 정확히 말해서는 로컬의 git으로 작업 후, 작업 내용을 github의 repo로 보내는 것입니다.

--- 

## UpStream, DownStream

### Upstream

- 소스가 최종적으로 관리되는 Repository를 말합니다.
- 팀원, 다른 개발자가 소스를 수정하고 PR을 보내고 다른 사람이 수정한 내용을 내려 받는 최상위 Repo입니다.

### Downstream

- 현재 최상위 Repo에서 하위 Repo 즉, 자신이 소스를 개발하는 환경을 말합니다. 
- PR을 보내고, 개발 및 소스를 관리하는 환경을 말합니다.


### 왜 상대적인 개념인가

1. _내가 혼자 스스로 프로젝트를 github로 관리했을 때_  
   upstream: Gihub Repo  
   downstream: Local Git 환경


2. _협업에서 다른 사람의 프로젝트에서 Fork(상대방의 소스를 자신의 repo로)에서 작업할때_  
   upstream: Fork original repo  
   downstream: 자신의 Oraganization repo

기준이 누군가에 따른 상대적인 개념이기 때문에 정리하면서, 공부한 내용을 포스팅하면서 공유합니다.  
감사합니다.

--- 

