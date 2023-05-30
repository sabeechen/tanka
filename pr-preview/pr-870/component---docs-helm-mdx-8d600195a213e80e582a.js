(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{YJCz:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return l})),t.d(a,"default",(function(){return i}));var s=t("wx14"),n=t("zLVn"),m=(t("q1tI"),t("7ljp")),c=t("BIGe"),p=(t("qKvR"),["components"]),l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!Object.prototype.hasOwnProperty.call(l,"__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/helm.mdx"}});var b={_frontmatter:l},r=c.a;function i(e){var a=e.components,t=Object(n.a)(e,p);return Object(m.b)(r,Object(s.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(m.b)("h1",{id:"helm-support"},"Helm Support"),Object(m.b)("p",null,"The ",Object(m.b)("a",{parentName:"p",href:"https://helm.sh"},"Helm")," project is the biggest ecosystem of high quality,\nwell maintained application definitions for Kubernetes."),Object(m.b)("p",null,"Even though Grafana Tanka uses the ",Object(m.b)("a",{parentName:"p",href:"/pr-preview/pr-870/jsonnet/overview"},"Jsonnet language")," for\nresource definition, you can still consume Helm resources, as described below."),Object(m.b)("blockquote",null,Object(m.b)("p",{parentName:"blockquote"},Object(m.b)("strong",{parentName:"p"},"Warning:")," Keep in mind this feature is considered EXPERIMENTAL")),Object(m.b)("h2",{id:"consuming-helm-charts-from-jsonnet"},"Consuming Helm Charts from Jsonnet"),Object(m.b)("p",null,"Helm support is provided using the\n",Object(m.b)("a",{parentName:"p",href:"https://github.com/grafana/jsonnet-libs/tree/master/tanka-util"},Object(m.b)("inlineCode",{parentName:"a"},"github.com/grafana/jsonnet-libs/tanka-util")),"\nlibrary. Install it with:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"jb install github.com/grafana/jsonnet-libs/tanka-util")))),Object(m.b)("p",null,"The following example shows how to extract the individual resources of the\n",Object(m.b)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/grafana/grafana"},Object(m.b)("inlineCode",{parentName:"a"},"grafana"))," Helm Chart:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," tanka "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"import"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"github.com/grafana/jsonnet-libs/tanka-util/main.libsonnet"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},";")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," helm "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," tanka.helm."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"new"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk9"},"std.thisFile"),Object(m.b)("span",{parentName:"span",className:"mtk1"},");")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"})),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"grafana:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," helm."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"template"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"grafana"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},", "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"./charts/grafana"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},", {")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    namespace: "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"monitoring"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},",")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    values: {")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      persistence: { enabled: "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"true"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," }")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    }")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  })")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("p",null,"The Chart itself is required to be ",Object(m.b)("a",{parentName:"p",href:"#vendoring-helm-charts"},"vendored at a relative\npath"),", in this case ",Object(m.b)("inlineCode",{parentName:"p"},"./charts/grafana"),"."),Object(m.b)("blockquote",null,Object(m.b)("p",{parentName:"blockquote"},Object(m.b)("strong",{parentName:"p"},"Important:")," You MUST include the ",Object(m.b)("inlineCode",{parentName:"p"},".new(std.thisFile)")," part in the import.\nThis is what tells Tanka where you actually call ",Object(m.b)("inlineCode",{parentName:"p"},"helm.template()")," from, so it\ncan find your vendored Charts.")),Object(m.b)("br",null),Object(m.b)("p",null,"Once invoked, the ",Object(m.b)("inlineCode",{parentName:"p"},"$.grafana")," key holds the individual resources of Helm Chart as\na regular Jsonnet object that looks roughly like so:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"cluster_role_binding_grafana_clusterrolebinding:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {"),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"/* ... */"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"},")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"cluster_role_grafana_clusterrole:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {"),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"/* ... */"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"},")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"config_map_grafana:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {"),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"/* ... */"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"},")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"config_map_grafana_test:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {"),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"/* ... */"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"},")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"deployment_grafana:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," {"),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"/* ... */"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"},")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// ...")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("p",null,"Above can be ",Object(m.b)("a",{parentName:"p",href:"/pr-preview/pr-870/tutorial/environments#patching"},"manipulated")," in the same way as any other Jsonnet data."),Object(m.b)("p",null,"Under the hood, this feature invokes the\n",Object(m.b)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm_template/"},Object(m.b)("inlineCode",{parentName:"a"},"helm template"))," CLI command.\nThe following options control how the command is invoked:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"...")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"})),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"grafana:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," helm."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"template"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"grafana"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},", "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"./charts/grafana"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},", {")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    namespace: "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"monitoring"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},",")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    values: {")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      persistence: { enabled: "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"true"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," }")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    },")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// Equivalent to: --api-versions v1 --api-versions apps/v1")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    apiVersions: ["),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'v1'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},", "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'apps/v1'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"]")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// Equivalent to: --kube-version v1.20.0")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    kubeVersion: "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'v1.20.0'")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"// Equivalent to: --no-hooks")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    noHooks: "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"true"),Object(m.b)("span",{parentName:"span",className:"mtk1"},",")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("p",null,"Tanka will install Custom Resource Definitions (CRDs) automatically, if the\nHelm Chart requires them and ships them in ",Object(m.b)("inlineCode",{parentName:"p"},"crds/"),". This is equivalent to ",Object(m.b)("inlineCode",{parentName:"p"},"helm\ntemplate --include-crds"),". This can be disabled using ",Object(m.b)("inlineCode",{parentName:"p"},"includeCrds: false"),":"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"{")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk10"},"grafana:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," helm."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"template"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"grafana"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},", "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"./charts/grafana"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},", {")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    includeCrds: "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"false")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  })")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"}")))),Object(m.b)("h2",{id:"vendoring-helm-charts"},"Vendoring Helm Charts"),Object(m.b)("p",null,"Tanka, like Jsonnet, is hermetic. It ",Object(m.b)("strong",{parentName:"p"},"always yields the same\nresources")," when the project is\nstrictly self-contained."),Object(m.b)("p",null,"Helm however keeps Charts and repository configuration somewhere around\n",Object(m.b)("inlineCode",{parentName:"p"},"~/.config/helm"),", which violates above requirement."),Object(m.b)("p",null,"To comply with this requirement, Tanka expects Helm Charts to be found ",Object(m.b)("strong",{parentName:"p"},"inside the\nbounds of a project"),". This means, you MUST put your Charts ",Object(m.b)("strong",{parentName:"p"},"somewhere next to\nthe file that calls ",Object(m.b)("inlineCode",{parentName:"strong"},"helm.template()")),", so that it can be referred to using a\nrelative path."),Object(m.b)("h3",{id:"vendor-location"},"Vendor Location"),Object(m.b)("p",null,"Where to actually put them inside the project is up to you, but keep in mind you\nneed to refer to them using relative paths."),Object(m.b)("p",null,"We recommend always writing libraries that wrap the actual Helm Chart, so the\nconsumer does not need to be aware of it. Whether you put these into your local ",Object(m.b)("inlineCode",{parentName:"p"},"lib/")," directory or\npublish and vendor them into the ",Object(m.b)("inlineCode",{parentName:"p"},"vendor/")," directory is up to you."),Object(m.b)("p",null,"A library usually looks like this:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":""},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},"  /jsonnetfile.json"),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},"  /main.libsonnet"))),Object(m.b)("p",null,"When adopting Helm inside it, we recommend vendoring at the top level, as such:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"diff"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  /jsonnetfile.json")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  /main.libsonnet")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"+"),Object(m.b)("span",{parentName:"span",className:"mtk6"}," /charts")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"+"),Object(m.b)("span",{parentName:"span",className:"mtk6"}," /charts/<someChart>")))),Object(m.b)("p",null,"This way, you can refer to the charts as ",Object(m.b)("inlineCode",{parentName:"p"},"./charts/<someChart>")," from inside\n",Object(m.b)("inlineCode",{parentName:"p"},"main.libsonnet"),". By keeping the chart as close to the consumer as possible, the\nlibrary is kept portable."),Object(m.b)("h3",{id:"charttool"},"Charttool"),Object(m.b)("p",null,"Helm does not make vendoring incredibly easy by itself. ",Object(m.b)("inlineCode",{parentName:"p"},"helm pull")," provides the\nrequired plumbing, but it does not record its actions in a reproducible manner."),Object(m.b)("p",null,"Therefore, Tanka ships a special utility at ",Object(m.b)("inlineCode",{parentName:"p"},"tk tool charts"),", which automates\n",Object(m.b)("inlineCode",{parentName:"p"},"helm pull"),":"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"# Create a chartfile.yaml in the current directory, e.g. in lib/myLibrary")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"$ tk tool charts init")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"})),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"$ "),Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"# Install the MySQL chart at version 1.6.7 from the stable repository")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"$ tk tool charts add stable/mysql@1.6.7")))),Object(m.b)("p",null,Object(m.b)("strong",{parentName:"p"},"Adding charts:")," To add a chart, use the following:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"$ tk tool charts add "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"<"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"repo"),Object(m.b)("span",{parentName:"span",className:"mtk12"},">"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"/"),Object(m.b)("span",{parentName:"span",className:"mtk12"},"<"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk12"},">"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"@"),Object(m.b)("span",{parentName:"span",className:"mtk12"},"<"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"version"),Object(m.b)("span",{parentName:"span",className:"mtk12"},">")))),Object(m.b)("p",null,"This will also call ",Object(m.b)("inlineCode",{parentName:"p"},"tk tool charts vendor"),", so that the ",Object(m.b)("inlineCode",{parentName:"p"},"charts/")," directory is updated."),Object(m.b)("br",null),Object(m.b)("p",null,Object(m.b)("strong",{parentName:"p"},"Adding Repositories:"),"\nBy default, the ",Object(m.b)("inlineCode",{parentName:"p"},"stable")," repository is automatically set up for you. If you wish\nto add another repository, you can use the ",Object(m.b)("inlineCode",{parentName:"p"},"add-repo")," command:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"# Add the official Grafana repository")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"$ tk tool charts add-repo grafana https://grafana.github.io/helm-charts")))),Object(m.b)("p",null,"Another way is to modify ",Object(m.b)("inlineCode",{parentName:"p"},"chartfile.yaml")," directly:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"diff"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"version: 1")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"repositories:")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  - name: stable")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    url: https://charts.helm.sh/stable")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"+"),Object(m.b)("span",{parentName:"span",className:"mtk6"}," - name: grafana")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"+"),Object(m.b)("span",{parentName:"span",className:"mtk6"},"   url: https://grafana.github.io/helm-charts")))),Object(m.b)("p",null,Object(m.b)("strong",{parentName:"p"},"Installing multiple versions of the same chart:"),"\nIf you wish to install multiple versions of the same chart, you can write them to a specific directory.",Object(m.b)("br",{parentName:"p"}),"\n","You can do so with a ",Object(m.b)("inlineCode",{parentName:"p"},":<directory>")," suffix in the ",Object(m.b)("inlineCode",{parentName:"p"},"add")," command, or by modifying the chartfile manually."),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"tk tool charts add stable/mysql@1.6.7:1.6.7")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"tk tool charts add stable/mysql@1.6.8:1.6.8")))),Object(m.b)("p",null,"The resulting chartfile will look like this:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"yaml"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"version"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"1")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"directory"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"charts")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"repositories"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"-"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"stable")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"url"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"https://charts.helm.sh/stable")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"requires"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"-"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"chart"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"stable/mysql")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"directory"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"1.6.7")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"version"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"1.6.7")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk5"},"-"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"chart"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"stable/mysql")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"directory"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"1.6.8")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"version"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"1.6.8")))),Object(m.b)("p",null,Object(m.b)("strong",{parentName:"p"},"Install charts from chartfile:")," To install charts from an existing chartfile, use the following:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"$ tk tool charts vendor")))),Object(m.b)("p",null,"Optionally, you can also pass the ",Object(m.b)("inlineCode",{parentName:"p"},"--prune")," flag to remove vendored charts that are no longer in the chartfile."),Object(m.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(m.b)("h3",{id:"helm-executable-missing"},"Helm executable missing"),Object(m.b)("p",null,"Helm support in Tanka requires the ",Object(m.b)("inlineCode",{parentName:"p"},"helm")," binary installed on your system and\navailable on the ",Object(m.b)("inlineCode",{parentName:"p"},"$PATH"),". If Helm is not installed, you will see this error message:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":""},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},'evaluating jsonnet: RUNTIME ERROR: Expanding Helm Chart: exec: "helm": executable file not found in $PATH'))),Object(m.b)("p",null,"To solve this, you need to ",Object(m.b)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"install Helm"),".\nIf you cannot install it system-wide, you can point Tanka at your executable\nusing ",Object(m.b)("a",{parentName:"p",href:"/pr-preview/pr-870/env-vars#tanka_helm_path"},Object(m.b)("inlineCode",{parentName:"a"},"TANKA_HELM_PATH"))),Object(m.b)("h3",{id:"optscalledfrom-unset"},"opts.calledFrom unset"),Object(m.b)("p",null,"This occurs, when Tanka was not told where it ",Object(m.b)("inlineCode",{parentName:"p"},"helm.template()")," was invoked\nfrom. This most likely means you didn't call ",Object(m.b)("inlineCode",{parentName:"p"},"new(std.thisFile)")," when importing ",Object(m.b)("inlineCode",{parentName:"p"},"tanka-util"),":"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," tanka "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"import"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'"github.com/grafana/jsonnet-libs/tanka-util/main.libsonnet"'),Object(m.b)("span",{parentName:"span",className:"mtk1"},";")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk4"},"local"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," helm "),Object(m.b)("span",{parentName:"span",className:"mtk12"},"="),Object(m.b)("span",{parentName:"span",className:"mtk1"}," tanka.helm."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"new"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk9"},"std.thisFile"),Object(m.b)("span",{parentName:"span",className:"mtk1"},");")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"                       ↑ This is important")))),Object(m.b)("h3",{id:"failed-to-find-chart"},"Failed to find Chart"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":""},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},"helmTemplate: Failed to find a Chart at 'stable/grafana': No such file or directory."),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},"helmTemplate: Failed to find a Chart at '/home/user/stuff/tanka/environments/default/grafana': No such file or directory."))),Object(m.b)("p",null,"Tanka failed to locate your Helm chart on the filesystem. It looked at the\nrelative path you provided in ",Object(m.b)("inlineCode",{parentName:"p"},"helm.template()"),", starting from the directory of\nthe file you called ",Object(m.b)("inlineCode",{parentName:"p"},"helm.template()")," from."),Object(m.b)("p",null,"Please check there is actually a valid Helm chart at this place. Referring to\ncharts as ",Object(m.b)("inlineCode",{parentName:"p"},"<repo>/<name>")," is disallowed by design."),Object(m.b)("h3",{id:"two-resources-share-the-same-name"},"Two resources share the same name"),Object(m.b)("p",null,"To make customization easier, ",Object(m.b)("inlineCode",{parentName:"p"},"helm.template()")," returns the resources not as the\nlist it receives from Helm, but instead converts this into an object."),Object(m.b)("p",null,"For the indexing key it uses ",Object(m.b)("inlineCode",{parentName:"p"},"kind_name")," by default. In some rare cases, this\nmight not be enough to distinguish between two resources, namely when the same\nresource exists in two namespaces."),Object(m.b)("p",null,"To handle this, pass a custom name format, e.g. to also include the namespace:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"jsonnet"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk10"},"custom:"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," helm."),Object(m.b)("span",{parentName:"span",className:"mtk9"},"template"),Object(m.b)("span",{parentName:"span",className:"mtk1"},"("),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'foo'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},", "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"'./charts/foo'"),Object(m.b)("span",{parentName:"span",className:"mtk1"},", {")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  nameFormat: "),Object(m.b)("span",{parentName:"span",className:"mtk6"},'\'{{ print .namespace "_" .kind "_" .metadata.name | snakecase }}\'')),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"})")))),Object(m.b)("p",null,"The literal default format used is ",Object(m.b)("inlineCode",{parentName:"p"},'{{ print .kind "_" .metadata.name | snakecase }}')),Object(m.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .material-theme-darker {\nbackground-color: #212121;\ncolor: #EEFFFF;\n}\n\n.material-theme-darker .mtk1 { color: #FFFFFF; }\n.material-theme-darker .mtk2 { color: #212121; }\n.material-theme-darker .mtk3 { color: #545454; }\n.material-theme-darker .mtk4 { color: #F78C6C; }\n.material-theme-darker .mtk5 { color: #89DDFF; }\n.material-theme-darker .mtk6 { color: #C3E88D; }\n.material-theme-darker .mtk7 { color: #FFCB6B; }\n.material-theme-darker .mtk8 { color: #EEFFFF; }\n.material-theme-darker .mtk9 { color: #82AAFF; }\n.material-theme-darker .mtk10 { color: #FF5370; }\n.material-theme-darker .mtk11 { color: #F07178; }\n.material-theme-darker .mtk12 { color: #C792EA; }\n.material-theme-darker .mtk13 { color: #EEFFFF90; }\n.material-theme-darker .mtk14 { color: #65737E; }\n.material-theme-darker .mtk15 { color: #B2CCD6; }\n.material-theme-darker .mtk16 { color: #C17E70; }\n.material-theme-darker .mtki { font-style: italic; }\n.material-theme-darker .mtkb { font-weight: bold; }\n.material-theme-darker .mtku { text-decoration: underline; text-underline-position: under; }\n"))}void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!Object.prototype.hasOwnProperty.call(i,"__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/helm.mdx"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-helm-mdx-8d600195a213e80e582a.js.map