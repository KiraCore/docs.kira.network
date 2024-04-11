"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[6988],{7821:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var a=s(5893),i=s(1151),t=s(4866),l=s(5162);const r={title:"Installation",sidebar_position:2,slug:"/sekai-installation"},o=void 0,c={id:"backend---sekai/sekai-installation",title:"Installation",description:"Installation",source:"@site/tabs/Docs/backend---sekai/sekai-installation.mdx",sourceDirName:"backend---sekai",slug:"/sekai-installation",permalink:"/docs/sekai-installation",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/sekai-installation&page-local=backend---sekai/sekai-installation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Installation",sidebar_position:2,slug:"/sekai-installation"},sidebar:"defaultSidebar",previous:{title:"System Requirements",permalink:"/docs/sekai-systemreq"},next:{title:"Configuration",permalink:"/docs/sekai-config"}},d={},h=[{value:"Installation",id:"6b4733753b1141ebadec8da43ee6c8fe",level:2},{value:"Linux/ubuntu",id:"b879a02837014f48ac435a1b2d2d2db5",level:2},{value:"Required Tools",id:"5629790c26bb4cedb9025ab46dd70fa2",level:2},{value:"Cosign",id:"95ea60da4e6647de9391afabd8b9c38f",level:3},{value:"Bash-utils",id:"229d311718aa4d5bbeeb225e7731cd40",level:3},{value:"Dependencies",id:"07e9d84107ba48fa862297b2bf6acb74",level:2},{value:"Go",id:"974aeb0c853d4a4db37b900d9d0bec7f",level:4},{value:"Systemd Alternative (requires Python2 Package)",id:"74ddeb9a5add46c18c0561f80984473c",level:4},{value:"Others",id:"bec68255b94b4716b936663f8a1aea8f",level:4},{value:"Sekai Installation",id:"417da5606683484286cf1ff21a7340fa",level:2},{value:"Alternative Installation Processes",id:"63e27c2e5af940218ffe572be0f5320c",level:2},{value:"Using Binaries",id:"4b2b70902ddb4c879c948bd0c3cf59c1",level:3},{value:"Using KIRA Manager",id:"a8c091760f38469a96d4b86ba746d162",level:3},{value:"(testing) Using a Docker Base-image Release",id:"564d5e42582e4067af0b7fcc4d1bbd99",level:3},{value:"Mac",id:"04d8df0144c14d869178f8bcc13787b2",level:2},{value:"Required Tools",id:"df90b4ff57684fec83660debdedfba39",level:2},{value:"Bash V5",id:"e12ff19e5f33489d91417d9c4bd8f954",level:3},{value:"Cosign",id:"0069f1f3f89b4b34a56731be349776be",level:3},{value:"Bash-utils",id:"bf886ff931294e1aad96372d39449386",level:3},{value:"Dependencies",id:"4bae39ed625c475494b196975893306b",level:2},{value:"Golang",id:"66072169c89349f79786b5b4c388b676",level:4},{value:"Others",id:"3bbb84dbac5748b5870a1930d94970b6",level:4},{value:"Sekai Installation",id:"fec5cf22760f4560b4a43d52328dff3f",level:2},{value:"Alternative Installation Processes",id:"fd1fa8f22b214af586fab939156eefb5",level:3},{value:"Using Binaries",id:"44bd35a00e7d4292bb2cc44bf69f8959",level:4},{value:"Using KIRA Manager",id:"476faf3ef9b24b3e9e26762cb0f1047c",level:4},{value:"Starting &amp; Testing",id:"0dbeaabf1c9d400596731df653b604e4",level:2},{value:"Start",id:"0773614fcfd64317bc7ebf0f8255dfb2",level:4},{value:"Stop",id:"1988428569484528bf9071b77a171046",level:4},{value:"Integration Tests",id:"00258775c9f4458bb9ca14d0134429a6",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"6b4733753b1141ebadec8da43ee6c8fe",children:"Installation"}),"\n",(0,a.jsxs)(t.Z,{children:[(0,a.jsxs)(l.Z,{value:"linux/ubuntu",label:"Linux/Ubuntu",children:[(0,a.jsx)(n.h2,{id:"b879a02837014f48ac435a1b2d2d2db5",children:"Linux/ubuntu"}),(0,a.jsx)(n.h2,{id:"5629790c26bb4cedb9025ab46dd70fa2",children:"Required Tools"}),(0,a.jsx)(n.p,{children:"KIRA requires the installation of two tools, Cosign and Bash-utils, in order to secure the network and simplify the execution of various tasks."}),(0,a.jsx)(n.h3,{id:"95ea60da4e6647de9391afabd8b9c38f",children:"Cosign"}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/sigstore/cosign",children:"https://github.com/sigstore/cosign"})}),(0,a.jsxs)(n.p,{children:["All KIRA Release Files are signed using ",(0,a.jsx)(n.a,{href:"https://github.com/sigstore/cosign",children:"sigstore cosign tool"}),". Cosign is a digital signature utility that is used to verify the authenticity and integrity of a file. When a file is signed with a digital signature, it provides a way to verify that the file has not been tampered with, and also to verify the identity of the person or entity who signed the file. It is used in Kira to sign and verify the authenticity of data, such as proprietary tools, binaries and scripts."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'\n# Assume root permissions\nsudo -s\n\n# Install essential dependencies\napt-get install -y wget\n\n# Download Cosign\nCOSIGN_VERSION="v2.0.0" && \\\nUBUNTU_AGENT="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36" && \\\nif [[ "$(uname -m)" == *"ar"* ]] ; then ARCH="arm64"; else ARCH="amd64" ; fi && \\\n cd /tmp && PLATFORM=$(uname) && declare -l FILE="cosign-${PLATFORM}-${ARCH}" && rm -rfv ./$FILE ./${FILE}.sig && \\\n wget --user-agent="$UBUNTU_AGENT" https://github.com/sigstore/cosign/releases/download/${COSIGN_VERSION}/$FILE -O ./$FILE && \\\n wget --user-agent="$UBUNTU_AGENT" https://github.com/sigstore/cosign/releases/download/${COSIGN_VERSION}/${FILE}.sig -O ./${FILE}.sig\n\n# If you do NOT have cosign installed already you should check that the "$FILE" has one of the below hashes \n# Hashes are only for the \'linux\' platform, for other platforms please refer to the github repository\nCOSIGN_HASH_ARM="8132cb2fb99a4c60ba8e03b079e12462c27073028a5d08c07ecda67284e0c88d" && \\\nCOSIGN_HASH_AMD="169a53594c437d53ffc401b911b7e70d453f5a2c1f96eb2a736f34f6356c4f2b" && \\\nFILE_HASH=$(sha256sum ./$FILE | awk \'{ print $1 }\' | xargs || echo -n "") && \\\nif [ "$FILE_HASH" != "$COSIGN_HASH_ARM" ] && [ "$FILE_HASH" != "$COSIGN_HASH_AMD" ] ; then\n    echoErr "ERROR: Failed to download cosign tool, expected checksum to be \'$COSIGN_HASH_ARM\' or \'$COSIGN_HASH_AMD\', but got \'$FILE_HASH\'"\n    exit 1\nelse\n    echo "Cosign tool downloaded successfully."\nfi\n\n# Save cosign public key\ncat > ./sigstore-cosign.pub << EOL\n-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEhyQCx0E9wQWSFI9ULGwy3BuRklnt\nIqozONbbdbqz11hlRJy9c7SG+hdcFl9jE9uE/dwtuwU2MqU9T/cN0YkWww==\n-----END PUBLIC KEY-----\nEOL\n\n# Verify cosign release\ncosign verify-blob --key="./sigstore-cosign.pub" --signature="./${FILE}.sig"  "./$FILE"\n\n# Move cosign to bin directory\nchmod +x -v ./$FILE && mv -fv ./$FILE /usr/local/bin/cosign \n\n# Check cosign version\ncosign version\n'})}),(0,a.jsx)(n.p,{children:"Add KIRA\u2019s public key"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# Save KIRA public key allowing to verify signed releases\nKIRA_COSIGN_PUB=/usr/keys/kira-cosign.pub && mkdir -p /usr/keys && \\\n cat > $KIRA_COSIGN_PUB << EOL\n-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE/IrzBQYeMwvKa44/DF/HB7XDpnE+\nf+mU9F/Qbfq25bBWV2+NlYMJv3KvKHNtu3Jknt6yizZjUV4b8WGfKBzFYw==\n-----END PUBLIC KEY-----\nEOL\n\n# Add key to env\necho "export KIRA_COSIGN_PUB=\\"$KIRA_COSIGN_PUB\\"" >> /etc/profile\n'})}),(0,a.jsx)(n.h3,{id:"229d311718aa4d5bbeeb225e7731cd40",children:"Bash-utils"}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/KiraCore/tools/releases",children:"https://github.com/KiraCore/tools/releases"})}),(0,a.jsx)(n.p,{children:"Bash-utils is a collection of utility functions and aliases for Bash shell scripts developed specifically for KIRA to streamline and simplify the process of executing tasks within the network. It provides various functions for managing environment variables, displaying information, and handling errors."}),(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The prerequisite to securely install BU is ",(0,a.jsx)(n.a,{href:"/docs/sekai-installation#95ea60da4e6647de9391afabd8b9c38f",children:"COSIGN tool"})," that will guarantee the integrity of the files. It MUST be installed and KIRA\u2019s public key added before proceeding."]})}),(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Always source /etc/profile with ",(0,a.jsx)(n.code,{children:". /etc/profile"})," when starting a new terminal to use BU."]})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# assume root permissions\nsudo -s && . /etc/profile\n\n# Install essential dependencies\napt-get install -y wget\n\n# Define version of BU you want to install\nTOOLS_VERSION="v0.3.46"\n\n# Download BU script\nif [ -z "$KIRA_COSIGN_PUB" ] ; then\n  echo "ERROR: KIRA_COSIGN_PUB variable is not set. Please refer to cosign installation to add KIRA\'s public key path as variable."\n  exit\nfi && \\\ncd /tmp && FILE_NAME="bash-utils.sh" && rm -rfv ./$FILE_NAME ./${FILE_NAME}.sig && \\\n UBUNTU_AGENT="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36" && \\\n wget --user-agent="$UBUNTU_AGENT" "https://github.com/KiraCore/tools/releases/download/$TOOLS_VERSION/${FILE_NAME}" -O ./$FILE_NAME && \\\n wget --user-agent="$UBUNTU_AGENT" "https://github.com/KiraCore/tools/releases/download/$TOOLS_VERSION/${FILE_NAME}.sig" -O ./${FILE_NAME}.sig\n\n# Verify cosign release\ncosign verify-blob --key "$KIRA_COSIGN_PUB" --signature "/tmp/${FILE_NAME}.sig" "/tmp/$FILE_NAME" --insecure-ignore-tlog --insecure-ignore-sct\n\n# Install BU\nchmod +x ./$FILE_NAME && ./$FILE_NAME bashUtilsSetup && ./etc/profile\n\n# Verify version of BU \nbu bashUtilsVersion\n'})}),(0,a.jsx)(n.h2,{id:"07e9d84107ba48fa862297b2bf6acb74",children:"Dependencies"}),(0,a.jsx)(n.h4,{id:"974aeb0c853d4a4db37b900d9d0bec7f",children:"Go"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'setGlobEnv GOROOT /usr/local/go && setGlobEnv GOPATH /home/go && setGlobEnv GOBIN /usr/local/go/bin && \\\nloadGlobEnvs && setGlobPath $GOROOT && setGlobPath $GOPATH && setGlobPath $GOBIN && loadGlobEnvs && \\\n( go clean -modcache -cache -n || : ) && rm -rfv "$GOROOT" "$GOBIN" "$GOPATH" && GO_VERSION="1.18.2" && \\\nGO_TAR="go$GO_VERSION.$(getPlatform)-$(getArch).tar.gz" && cd /tmp && safeWget ./$GO_TAR https://dl.google.com/go/$GO_TAR \\\n"fc4ad28d0501eaa9c9d6190de3888c9d44d8b5fb02183ce4ae93713f67b8a35b,e54bec97a1a5d230fc2f9ad0880fcbabb5888f30ed9666eca4a91c5a32e86cbc" && \\\ntar -C /usr/local -xf $GO_TAR &>/dev/null && go version\n'})}),(0,a.jsx)(n.h4,{id:"74ddeb9a5add46c18c0561f80984473c",children:"Systemd Alternative (requires Python2 Package)"}),(0,a.jsx)(n.p,{children:"Systemd is a useful service manager that detects errors or memory overflow in the Sekai node and keeps it keeps it running even after system restarts or power outages."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget https://raw.githubusercontent.com/gdraheim/docker-systemctl-replacement/master/files/docker/systemctl.py -O /usr/local/bin/systemctl2 && \\\nchmod +x /usr/local/bin/systemctl2 && \\\nsystemctl2 --version\n"})}),(0,a.jsx)(n.h4,{id:"bec68255b94b4716b936663f8a1aea8f",children:"Others"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"apt-get install jq\n"})}),(0,a.jsx)(n.h2,{id:"417da5606683484286cf1ff21a7340fa",children:"Sekai Installation"}),(0,a.jsx)(n.p,{children:"Login as admin & load environment variables."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo -s\n"})}),(0,a.jsxs)(n.p,{children:["Set desired SEKAI release version and binaries repo as env variables within ",(0,a.jsx)(n.code,{children:"/etc/profile"})," (with bash-utils or manually). Sourcing ",(0,a.jsx)(n.code,{children:"/etc/profile"})," is necessary."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'setGlobEnv SEKAI_VERSION "v0.3.42" && \\\nsetGlobEnv SEKAI_REPO "$HOME/sekai" && \\\nsetGlobEnv NETWORK_NAME "test" && \\\nsetGlobEnv SEKAID_HOME "~/.sekaid-$NETWORK_NAME" && \\\nloadGlobEnvs\n'})}),(0,a.jsx)(n.p,{children:"Clone repository and install"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'rm -fr $SEKAI_REPO && rm -fr $GOBIN/sekaid && mkdir $SEKAI_REPO && cd $SEKAI_REPO && \\\ngit clone https://github.com/KiraCore/sekai.git -b $SEKAI_VERSION $SEKAI_REPO && \\\nchmod -R 777 ./scripts && make install && \\\necho "SUCCESS installed sekaid $(sekaid version)" || echo "FAILED"\n'})}),(0,a.jsx)(n.p,{children:"Verify successful installation"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sekaid version --long\n"})}),(0,a.jsx)(n.h2,{id:"63e27c2e5af940218ffe572be0f5320c",children:"Alternative Installation Processes"}),(0,a.jsx)(n.h3,{id:"4b2b70902ddb4c879c948bd0c3cf59c1",children:"Using Binaries"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'cd /tmp && \\\nPLATFORM="$(getPlatform)" && \\\nARCHITECURE="$(getArch)" && \\\nBIN_DEST="/usr/local/bin/sekaid" && \\\nsafeWget ./sekaid.deb "https://github.com/KiraCore/sekai/releases/download/$SEKAI_VERSION/sekai-${PLATFORM}-${ARCHITECURE}.deb" \\\n"$KIRA_COSIGN_PUB" && dpkg-deb -x ./sekaid.deb ./sekaid && cp -fv "sekaid/bin/sekaid" $BIN_DEST && chmod -v 755 $BIN_DEST && \\\nechoInfo "INFO: Installed bash-utils: " && bashUtilsVersion && \\\nechoInfo "INFO: Installed sekaid: " && sekaid version\n'})}),(0,a.jsx)(n.h3,{id:"a8c091760f38469a96d4b86ba746d162",children:"Using KIRA Manager"}),(0,a.jsxs)(n.p,{children:["For a detailed KM setup walkthrough, visit the ",(0,a.jsx)(n.a,{href:"/testnet/",children:"Testnet"})," section."]}),(0,a.jsx)(n.h3,{id:"564d5e42582e4067af0b7fcc4d1bbd99",children:"(testing) Using a Docker Base-image Release"}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/KiraCore/docker/pkgs/container/docker%2Fbase-image",children:"Latest base-image version"})}),(0,a.jsxs)(n.p,{children:["Erase previous instances ",(0,a.jsx)(n.em,{children:"(Optional)"})]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker rm -f $(docker ps -a -q) && \\\ndocker image prune -a -f\n"})}),(0,a.jsx)(n.p,{children:"Load base-image in container"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'IMG_VERSION="v0.13.14"\n\nBASE_NAME="test" && BASE_IMG="[ghcr.io/kiracore/docker/base-image:](http://ghcr.io/kiracore/docker/kira-base:v0.11.4)$IMG_VERSION" && \\\ndocker run -i -t -d --privileged --net bridge --name $BASE_NAME --hostname test.local $BASE_IMG /bin/bash\n'})}),(0,a.jsx)(n.p,{children:"Enter container"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'docker start -i $(timeout 3 docker ps --no-trunc -aqf "name=^${BASE_NAME}$" 2> /dev/null || echo -n "")\n'})}),(0,a.jsx)(n.p,{children:"Install Sekai"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'rm -fr $SEKAI_REPO && rm -fr $GOBIN/sekaid && mkdir $SEKAI_REPO && cd $SEKAI_REPO && \\\ngit clone https://github.com/KiraCore/sekai.git -b $SEKAI_VERSION $SEKAI_REPO && \\\nchmod -R 777 ./scripts && make install && \\\necho "SUCCESS installed sekaid $(sekaid version)" || echo "FAILED"\n'})}),(0,a.jsx)(n.p,{children:"Delete container"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'docker rm -f $(timeout 3 docker ps --no-trunc -aqf "name=^${BASE_NAME}$" 2> /dev/null || echo -n "")\n'})})]}),(0,a.jsxs)(l.Z,{value:"mac",label:"Mac",children:[(0,a.jsx)(n.h2,{id:"04d8df0144c14d869178f8bcc13787b2",children:"Mac"}),(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"The installation process on macOS hasn't been fully tested and may have unresolved issues. We encourage users to report any problems and contribute to improvements."})}),(0,a.jsx)(n.h2,{id:"df90b4ff57684fec83660debdedfba39",children:"Required Tools"}),(0,a.jsx)(n.h3,{id:"e12ff19e5f33489d91417d9c4bd8f954",children:"Bash V5"}),(0,a.jsx)(n.p,{children:"Bash is the default command line interpreter for many Unix-based operating systems, including macOS. However MacOS, by default, comes with an older version of Bash (version 3.2.57) due to licensing reasons. Bash V5 is the latest major version and offers numerous improvements and features compared to previous versions. In KIRA, some commands used in scripts might require Bash V5 to properly execute."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# Install Bash V5\nbrew install bash\n\n# Add Bash V5 to the list of acceptable shells\necho "/usr/local/bin/bash" | sudo tee -a /etc/shells\n\n# Change your default shell to Bash V5\nchsh -s /usr/local/bin/bash\n\n# Restart your terminal and check version\necho $BASH_VERSION\n'})}),(0,a.jsx)(n.h3,{id:"0069f1f3f89b4b34a56731be349776be",children:"Cosign"}),(0,a.jsx)(n.p,{children:"Cosign is a digital signature utility that is used to verify the authenticity and integrity of a file. When a file is signed with a digital signature, it provides a way to verify that the file has not been tampered with, and also to verify the identity of the person or entity who signed the file. It is used in Kira to sign and verify the authenticity of data, such as proprietary tools, binaries and scripts."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'\n# Install essential dependencies\nbrew install wget\n\n# Download Cosign\nCOSIGN_VERSION="v2.0.0" && \\\nMAC_AGENT="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36" && \\\nif [[ "$(uname -m)" == *"ar"* ]] ; then ARCH="arm64"; else ARCH="amd64" ; fi && \\\n cd /tmp && PLATFORM=$(uname) && declare -l FILE="cosign-${PLATFORM}-${ARCH}" && rm -rfv ./$FILE ./${FILE}.sig && \\\n wget --user-agent="$MAC_AGENT" https://github.com/sigstore/cosign/releases/download/${COSIGN_VERSION}/$FILE -O ./$FILE && \\\n wget --user-agent="$MAC_AGENT" https://github.com/sigstore/cosign/releases/download/${COSIGN_VERSION}/${FILE}.sig -O ./${FILE}.sig\n\n# If you do NOT have cosign installed already you should check that the "$FILE" has one of the below hashes \n# Hashes are only for the \'mac\' platform, for other platforms please refer to the github repository\nCOSIGN_HASH_ARM="9d7821e1c05da4b07513729cb00d1070c9a95332c66d90fa593ed77d8c72ca2a" && \\\nCOSIGN_HASH_AMD="d2c8fc0edb42a1e9745da1c43a2928cee044f3b8a1b8df64088a384c7e6f5b5d" && \\\nFILE_HASH=$(shasum -a 256 ./$FILE | awk \'{ print $1 }\' | xargs || echo -n "") && \\\nif [ "$FILE_HASH" != "$COSIGN_HASH_ARM" ] && [ "$FILE_HASH" != "$COSIGN_HASH_AMD" ] ; then\n    echo "ERROR: Failed to download cosign tool, expected checksum to be \'$COSIGN_HASH_ARM\' or \'$COSIGN_HASH_AMD\', but got \'$FILE_HASH\'"\n    exit 1\nelse\n    echo "Cosign tool downloaded successfully."\nfi\n\n# Save cosign public key\ncat > ./sigstore-cosign.pub << EOL\n-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEhyQCx0E9wQWSFI9ULGwy3BuRklnt\nIqozONbbdbqz11hlRJy9c7SG+hdcFl9jE9uE/dwtuwU2MqU9T/cN0YkWww==\n-----END PUBLIC KEY-----\nEOL\n\n# Verify cosign release\ncosign verify-blob --key="./sigstore-cosign.pub" --signature="./${FILE}.sig"  "./$FILE"\n\n# Move cosign to bin directory\nchmod +x ./$FILE && mv -fv ./$FILE /usr/local/bin/cosign \n\n# Check cosign version\ncosign version\n'})}),(0,a.jsx)(n.p,{children:"Add KIRA\u2019s public key"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# Save KIRA public key allowing to verify signed releases\nKIRA_COSIGN_PUB="$HOME/keys/kira-cosign.pub" && mkdir -p $HOME/keys && \\\n cat > $KIRA_COSIGN_PUB << EOL\n-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE/IrzBQYeMwvKa44/DF/HB7XDpnE+\nf+mU9F/Qbfq25bBWV2+NlYMJv3KvKHNtu3Jknt6yizZjUV4b8WGfKBzFYw==\n-----END PUBLIC KEY-----\nEOL\n\n# Add key to env\necho "export KIRA_COSIGN_PUB=\\"$KIRA_COSIGN_PUB\\"" >> /etc/profile\n'})}),(0,a.jsx)(n.h3,{id:"bf886ff931294e1aad96372d39449386",children:"Bash-utils"}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/KiraCore/tools/releases",children:"https://github.com/KiraCore/tools/releases"})}),(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The prerequisite to install BU is ",(0,a.jsx)(n.a,{href:"/docs/sekai-installation#0069f1f3f89b4b34a56731be349776be",children:"COSIGN tool"})," that will guarantee the integrity of the files and ",(0,a.jsx)(n.a,{href:"/docs/sekai-installation#e12ff19e5f33489d91417d9c4bd8f954",children:"Bash V5"})," for better compatibility. They MUST be installed and KIRA\u2019s public key added before proceeding."]})}),(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Unfortunately, certain commands within the bash-utils tool may not behave properly on macOS due to slight variations in command behavior, such as the 'sed' command, which exhibit differences between Mac and Linux platforms."})}),(0,a.jsx)(n.p,{children:"Bash-utils is a collection of utility functions and aliases for Bash shell scripts. It provides various functions for managing environment variables, displaying information, and handling errors. Bash-utils is used in KIRA to streamline and simplify the process of executing various tasks within the network."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'sudo -s && . /etc/profile\n\nTOOLS_VERSION="v0.3.46" && FILE_NAME="bash-utils.sh" && \\\nif [ -z "$KIRA_COSIGN_PUB" ] ; then\n  echo "ERROR: KIRA_COSIGN_PUB variable is not set. Please refer to cosign installation to add KIRA\'s public key path as variable."\n  exit\nfi && \\\nwget "https://github.com/KiraCore/tools/releases/download/$TOOLS_VERSION/${FILE_NAME}" -O ./$FILE_NAME && \\\nwget "https://github.com/KiraCore/tools/releases/download/$TOOLS_VERSION/${FILE_NAME}.sig" -O ./${FILE_NAME}.sig && \\\ncosign verify-blob --key="$KIRA_COSIGN_PUB" --signature=./${FILE_NAME}.sig ./$FILE_NAME && \\\nchmod -v 555 ./$FILE_NAME && ./$FILE_NAME bashUtilsSetup "/var/kiraglob" && . /etc/profile && \\\necho "Installed bash-utils $(bash-utils bashUtilsVersion)"\n'})}),(0,a.jsx)(n.h2,{id:"4bae39ed625c475494b196975893306b",children:"Dependencies"}),(0,a.jsx)(n.h4,{id:"66072169c89349f79786b5b4c388b676",children:"Golang"}),(0,a.jsx)(n.p,{children:"Install Go"}),(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"$GOBIN is required as environment variable for building SEKAI"})}),(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"setGlobEnv"})," and ",(0,a.jsx)(n.code,{children:"setGlobPath"})," are amongst the commands that do not behave properly. Consider adding/editing the environment variable manually."]})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# Install Go \nbrew install go\n\n# Assume root permissions \nsudo -s\n\n# Set environment variables (manually)\ngoVersion=$(go version | awk \'{print $3}\' | cut -c 3-) && \\\nGOROOT="/usr/local/Cellar/go/$goVersion" && \\\nGOBIN="$GOROOT/bin" && \\\nGOPATH="$HOME/go" && \\\nPATH="$GOBIN:$GOPATH:$PATH"\n\n# Add variables to /etc/profile\necho "export GOROOT=\\"$GOROOT\\"" >> /etc/profile\necho "export GOBIN=\\"$GOBIN\\"" >> /etc/profile\necho "export GOPATH=\\"$GOPATH\\"" >> /etc/profile\necho "export PATH=\\"$PATH\\"" >> /etc/profile\n'})}),(0,a.jsx)(n.h4,{id:"3bbb84dbac5748b5870a1930d94970b6",children:"Others"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"brew install jq\n"})}),(0,a.jsx)(n.h2,{id:"fec5cf22760f4560b4a43d52328dff3f",children:"Sekai Installation"}),(0,a.jsxs)(n.p,{children:["Login as admin & load environment variables. Using bash shell and ",(0,a.jsx)(n.em,{children:"sourcing /etc/profile is necessary."})]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Assume sudo \nsudo -s && . /etc/profile\n"})}),(0,a.jsxs)(n.p,{children:["Set desired SEKAI release version and binaries repo ",(0,a.jsx)(n.em,{children:"(requires bash-utils)."})]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'setGlobEnv SEKAI_VERSION "v0.3.39" && \\\nsetGlobEnv SEKAI_REPO "$HOME/sekai" && \\\nloadGlobEnvs\n'})}),(0,a.jsx)(n.p,{children:"Clone repo and install"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'rm -fr $SEKAI_REPO && rm -fr $GOBIN/sekaid && mkdir $SEKAI_REPO && cd $SEKAI_REPO && \\\ngit clone https://github.com/KiraCore/sekai.git -b $SEKAI_VERSION $SEKAI_REPO && \\\nchmod -R 777 ./scripts && make install && \\\necho "SUCCESS installed sekaid $(sekaid version)" || echo "FAILED"\n'})}),(0,a.jsx)(n.h3,{id:"fd1fa8f22b214af586fab939156eefb5",children:"Alternative Installation Processes"}),(0,a.jsx)(n.h4,{id:"44bd35a00e7d4292bb2cc44bf69f8959",children:"Using Binaries"}),(0,a.jsx)(n.p,{children:"Unfortunately, it is not possible to install .deb packages on MacOS as of now."}),(0,a.jsx)(n.h4,{id:"476faf3ef9b24b3e9e26762cb0f1047c",children:"Using KIRA Manager"}),(0,a.jsxs)(n.p,{children:["For a detailed KM setup walkthrough, visit ",(0,a.jsx)(n.a,{href:"https://testnet.kira.network/",children:"testnet.kira.network"}),"."]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"0dbeaabf1c9d400596731df653b604e4",children:"Starting & Testing"}),"\n",(0,a.jsx)(n.h4,{id:"0773614fcfd64317bc7ebf0f8255dfb2",children:"Start"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd $SEKAI_HOME/sekai && \\\nmake network-start\n"})}),"\n",(0,a.jsx)(n.h4,{id:"1988428569484528bf9071b77a171046",children:"Stop"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd $SEKAI_HOME/sekai && \\\nmake network-stop\n"})}),"\n",(0,a.jsx)(n.h4,{id:"00258775c9f4458bb9ca14d0134429a6",children:"Integration Tests"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Full integration test (duration > 1h) :\nmake test-local \n\n# Individual integration test : \n# available integration tests can be found @ sekai/scripts/test-local/\nmake network-start && scripts/test-local/your-test.sh\n"})})]})}function b(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},5162:(e,n,s)=>{s.d(n,{Z:()=>l});s(7294);var a=s(6905);const i={tabItem:"tabItem_Ymn6"};var t=s(5893);function l(e){let{children:n,hidden:s,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,l),hidden:s,children:n})}},4866:(e,n,s)=>{s.d(n,{Z:()=>A});var a=s(7294),i=s(6905),t=s(2466),l=s(6550),r=s(469),o=s(1980),c=s(7392),d=s(12);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:i}}=e;return{value:n,label:s,attributes:a,default:i}}))}(s);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function b(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:s}=e;const i=(0,l.k6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o._X)(t),(0,a.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(i.location.search);n.set(t,e),i.replace({...i.location,search:n.toString()})}),[t,i])]}function g(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,t=u(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:t}))),[c,h]=f({queryString:s,groupId:i}),[g,p]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,t]=(0,d.Nk)(s);return[i,(0,a.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:i}),m=(()=>{const e=c??g;return b({value:e,tabValues:t})?e:null})();(0,r.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),p(e)}),[h,p,t]),tabValues:t}}var p=s(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var I=s(5893);function E(e){let{className:n,block:s,selectedValue:a,selectValue:l,tabValues:r}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),d=e=>{const n=e.currentTarget,s=o.indexOf(n),i=r[s].value;i!==a&&(c(n),l(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,I.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},n),children:r.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,I.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...t,className:(0,i.Z)("tabs__item",m.tabItem,t?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:i}=e;const t=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,I.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function x(e){const n=g(e);return(0,I.jsxs)("div",{className:(0,i.Z)("tabs-container",m.tabList),children:[(0,I.jsx)(E,{...e,...n}),(0,I.jsx)(v,{...e,...n})]})}function A(e){const n=(0,p.Z)();return(0,I.jsx)(x,{...e,children:h(e.children)},String(n))}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>l});var a=s(7294);const i={},t=a.createContext(i);function l(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);