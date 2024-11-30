# Changelog

For releases from v0.24.0 to v0.28.3, you can find the changelog in the GitHub releases: https://github.com/grafana/tanka/releases

## [0.31.0](https://github.com/sabeechen/tanka/compare/v0.30.1...v0.31.0) (2024-11-30)


### 🎉 Features

* **actions:** Pin commit SHAs ([#1111](https://github.com/sabeechen/tanka/issues/1111)) ([c11c35f](https://github.com/sabeechen/tanka/commit/c11c35fcd1f60887dcf753f1a8b865467bdbc88e))
* Add acceptance tests ([#1040](https://github.com/sabeechen/tanka/issues/1040)) ([9803259](https://github.com/sabeechen/tanka/commit/98032597c18276086bc6f7419cf3a7e36c399fb7))
* add support for overriding environment label ([#824](https://github.com/sabeechen/tanka/issues/824)) ([#975](https://github.com/sabeechen/tanka/issues/975)) ([b44bdc9](https://github.com/sabeechen/tanka/commit/b44bdc9a210e4b9c734afa89e9a049c4112576ae))
* allow using external variables in export and env list   ([#1112](https://github.com/sabeechen/tanka/issues/1112)) ([80ffbfd](https://github.com/sabeechen/tanka/commit/80ffbfd423f988b14641ee38fc158919c45d8586))
* **api:** Environment discovery  ([#468](https://github.com/sabeechen/tanka/issues/468)) ([9facf1f](https://github.com/sabeechen/tanka/commit/9facf1f8e137f069aa0f274a423fee7fe30196af))
* **api:** Peek  ([#467](https://github.com/sabeechen/tanka/issues/467)) ([e5b5266](https://github.com/sabeechen/tanka/commit/e5b5266c16784a05349653debfda893faf056ada))
* **ci:** run on real arm64 builders ([#1193](https://github.com/sabeechen/tanka/issues/1193)) ([54132fd](https://github.com/sabeechen/tanka/commit/54132fd3da280b4e9a55a066635809e7f8588318))
* **ci:** run required checks on merge groups ([#1192](https://github.com/sabeechen/tanka/issues/1192)) ([1cfbdf8](https://github.com/sabeechen/tanka/commit/1cfbdf83a91494db6bfdc7e5d69451ee73a2dcb7))
* **cli:** Add --inject-labels to `tk env add|set` ([#505](https://github.com/sabeechen/tanka/issues/505)) ([315bb09](https://github.com/sabeechen/tanka/commit/315bb096a82154f5c113135000aea95ae56eef2d))
* **cli:** Add --with-prune option for diff command ([#469](https://github.com/sabeechen/tanka/issues/469)) ([5d821cc](https://github.com/sabeechen/tanka/commit/5d821cc85968a182d0d71f9dd784330f3d12648c))
* **cli:** add -e to tk eval ([#378](https://github.com/sabeechen/tanka/issues/378)) ([a68d33d](https://github.com/sabeechen/tanka/commit/a68d33d18391ca9def098e62cc7a47130f7bb4b7))
* **cli:** Add `tk diff --exit-zero` flag ([#506](https://github.com/sabeechen/tanka/issues/506)) ([a43a839](https://github.com/sabeechen/tanka/commit/a43a83920937a4ea819a965b82fee59962ac813c))
* **cli:** bulk export ([#450](https://github.com/sabeechen/tanka/issues/450)) ([d5c878e](https://github.com/sabeechen/tanka/commit/d5c878e1754497607a3d76fba0c4ce823bcd128e))
* **cli:** Improve user control of paging ([#373](https://github.com/sabeechen/tanka/issues/373)) ([4164b77](https://github.com/sabeechen/tanka/commit/4164b77d1b72d4ee5b058c078c6d6d5658d242e0))
* **cli:** initialize inline environments ([#451](https://github.com/sabeechen/tanka/issues/451)) ([31cda44](https://github.com/sabeechen/tanka/commit/31cda44cafe29dfb857574b54d135732527b8411))
* **cli:** run commands with tk- prefix on PATH ([#412](https://github.com/sabeechen/tanka/issues/412)) ([65619da](https://github.com/sabeechen/tanka/commit/65619daa6432276b8148b1d55fe99dab19b59cb6))
* **cli:** sort environments by name ([#521](https://github.com/sabeechen/tanka/issues/521)) ([f88c104](https://github.com/sabeechen/tanka/commit/f88c104adb8d00a9cfef0b782f3676d8d58df294))
* **cli:** TANKA_PAGER environment variable ([#1047](https://github.com/sabeechen/tanka/issues/1047)) ([ce9a47a](https://github.com/sabeechen/tanka/commit/ce9a47af31585e71e94892042fae73716bd8e889))
* **cli:** tk status improvements ([#533](https://github.com/sabeechen/tanka/issues/533)) ([fc049ab](https://github.com/sabeechen/tanka/commit/fc049ab5eb6ac33bfd4ad476e3c6ddf767549d2a))
* **cmd:** add --jsonnet-implemenation flag to `tk eval` ([#998](https://github.com/sabeechen/tanka/issues/998)) ([1975c28](https://github.com/sabeechen/tanka/commit/1975c28e790fc7aa2f40315b2d4795269b9c4574))
* **docker:** add kustomize binary ([#597](https://github.com/sabeechen/tanka/issues/597)) ([ce3e48e](https://github.com/sabeechen/tanka/commit/ce3e48e9a056c540e020506340959f6df037ac24))
* **docker:** fix build and remove arm 32 bit ([#598](https://github.com/sabeechen/tanka/issues/598)) ([c12e4ab](https://github.com/sabeechen/tanka/commit/c12e4ab28281d40db1f91b3060df188cab740e96))
* **env list:** allow specifying a jsonnet implementation ([#1208](https://github.com/sabeechen/tanka/issues/1208)) ([a3e7140](https://github.com/sabeechen/tanka/commit/a3e7140ce3d17c65ec551f27fc4443f00556676a))
* **helm:** Add support for `--no-hooks` switch in Helm template ([#545](https://github.com/sabeechen/tanka/issues/545)) ([1e4d1dd](https://github.com/sabeechen/tanka/commit/1e4d1ddf75ec6171ffb40083ed794c772f33098f))
* **helm:** Make name format configurable ([#381](https://github.com/sabeechen/tanka/issues/381)) ([57106e4](https://github.com/sabeechen/tanka/commit/57106e4cf590b2a4dfe06f15c5543f71128caacb))
* inline Environment ([#403](https://github.com/sabeechen/tanka/issues/403)) ([12f7716](https://github.com/sabeechen/tanka/commit/12f771628078e282a2c39c93e319cdcf1bae103c))
* **jsonnet:** allow other entrypoints ([#389](https://github.com/sabeechen/tanka/issues/389)) ([59a5f5f](https://github.com/sabeechen/tanka/commit/59a5f5f8b9eaabe3d13e1de28920bff9d4a3f769))
* **k8s:** add metadata.Namespace ([#435](https://github.com/sabeechen/tanka/issues/435)) ([c94b9b8](https://github.com/sabeechen/tanka/commit/c94b9b83e260832c35656dc364129cd3df012db3))
* **k8s:** Set default labels and annotations from spec.json ([073e616](https://github.com/sabeechen/tanka/commit/073e61671316acd4941e89bfcff98ab6fcba9e54))
* multiple inline environments ([#476](https://github.com/sabeechen/tanka/issues/476)) ([a736c82](https://github.com/sabeechen/tanka/commit/a736c82015c391e852432c80941e5066d29b0992))
* new `tk tool importers-count` ([#1232](https://github.com/sabeechen/tanka/issues/1232)) ([5dcb6c5](https://github.com/sabeechen/tanka/commit/5dcb6c5bb56a704ed806c74d37beede93352415a))
* **prune:** warn before deleting namespaces ([#531](https://github.com/sabeechen/tanka/issues/531)) ([dc6caa3](https://github.com/sabeechen/tanka/commit/dc6caa30524e78cc0cc588053bb117bebdad2e36))
* render kustomize into jsonnet ([#422](https://github.com/sabeechen/tanka/issues/422)) ([8e1e69e](https://github.com/sabeechen/tanka/commit/8e1e69ed00ff6c116c442b893b96807dae367e4f))
* s/ksonnet-lib/k8s-alpha ([#563](https://github.com/sabeechen/tanka/issues/563)) ([83c8cf0](https://github.com/sabeechen/tanka/commit/83c8cf09e614868bd870af73ac506d8b7945b7e3))
* support .metadata.generateName ([#526](https://github.com/sabeechen/tanka/issues/526)) ([#529](https://github.com/sabeechen/tanka/issues/529)) ([d548e54](https://github.com/sabeechen/tanka/commit/d548e5426b274910d4c9d435fcb5fdb9765b64ac))
* support apply --server-side ([#695](https://github.com/sabeechen/tanka/issues/695)) ([6622006](https://github.com/sabeechen/tanka/commit/6622006dc90abbe45a6967710d94d78919edbd67))
* Tanka version constraint ([#396](https://github.com/sabeechen/tanka/issues/396)) ([5b1c57d](https://github.com/sabeechen/tanka/commit/5b1c57deb01855b3d7af7a54a3e21618e92d0c7c))
* **tool/charts:** add repo cmd ([#455](https://github.com/sabeechen/tanka/issues/455)) ([411b929](https://github.com/sabeechen/tanka/commit/411b9293a9f086868d70486227b38fadaead6e32))
* **tool/charts:** Check chart versions and update accordingly ([#420](https://github.com/sabeechen/tanka/issues/420)) ([5c286b7](https://github.com/sabeechen/tanka/commit/5c286b7dc8a61d1bcf19f4198aec6a42949fdf73))
* **tool/charts:** Only update helm repositories when necessary ([#535](https://github.com/sabeechen/tanka/issues/535)) ([0d75e74](https://github.com/sabeechen/tanka/commit/0d75e7441e34f61c862fdc0060419417adea6fb1))
* **tool/imports:** allow files as environment ([#517](https://github.com/sabeechen/tanka/issues/517)) ([78c74d1](https://github.com/sabeechen/tanka/commit/78c74d12c646d9be8b0e3e2532e4cec41f3f7190))
* **tool:** use jpath tool to export JSONNET_PATH  ([#427](https://github.com/sabeechen/tanka/issues/427)) ([c06134b](https://github.com/sabeechen/tanka/commit/c06134b4c5ea367260e8c1ab6979597fd1fd43eb))


### 🐛 Bug Fixes

* **api:** restore parallel export ([#470](https://github.com/sabeechen/tanka/issues/470)) ([072cbd5](https://github.com/sabeechen/tanka/commit/072cbd567a9953e60938d217cd906896378916e8))
* **api:** write relative path to manifest.json ([#463](https://github.com/sabeechen/tanka/issues/463)) ([3ab42ec](https://github.com/sabeechen/tanka/commit/3ab42ec615d5b94b67a05f0ab5dada503768402a))
* **ci:** fix setup-goversion after Dockerfile cleanup ([#1154](https://github.com/sabeechen/tanka/issues/1154)) ([d69d2f2](https://github.com/sabeechen/tanka/commit/d69d2f2f02d9f733ce7ce78503380ce465f18f51))
* **cli:** Do not silently fail on find/List ([#515](https://github.com/sabeechen/tanka/issues/515)) ([3cc514d](https://github.com/sabeechen/tanka/commit/3cc514d87fecdb6b5d1f4ca5261a6f978e10c73f))
* **cli:** ensure TLACode works with EvalScript ([#464](https://github.com/sabeechen/tanka/issues/464)) ([cabb9c7](https://github.com/sabeechen/tanka/commit/cabb9c73326b8416fa548b61d16efb571dad057a))
* **cli:** Environment name at env creation ([#404](https://github.com/sabeechen/tanka/issues/404)) ([111cbd5](https://github.com/sabeechen/tanka/commit/111cbd5f688d02df0f5bbc42dbb856faf3365415))
* **cli:** initialize executables map ([#478](https://github.com/sabeechen/tanka/issues/478)) ([971289f](https://github.com/sabeechen/tanka/commit/971289f65d05e66a28d3cccf3d451966f64f5935))
* **cli:** invalid formatting in tk status ([#399](https://github.com/sabeechen/tanka/issues/399)) ([a18afbf](https://github.com/sabeechen/tanka/commit/a18afbfc561cd8ef94f42195df752561a9ee99ee))
* **cli:** Split diff and non-diff output ([#537](https://github.com/sabeechen/tanka/issues/537)) ([5149d1b](https://github.com/sabeechen/tanka/commit/5149d1ba761db1c519c65f4502edf715cb8bc31e))
* close repo tmp file ([#1022](https://github.com/sabeechen/tanka/issues/1022)) ([5e0eb01](https://github.com/sabeechen/tanka/commit/5e0eb011a6de3163e5eead8d0b2f8278d1100b1a))
* correct namespace when using a file ([#472](https://github.com/sabeechen/tanka/issues/472)) ([037f0eb](https://github.com/sabeechen/tanka/commit/037f0eb4b4b69f4313fa35ef2fb62f731c35775e))
* delete command supports kinds that do not match singular/plural names ([#1236](https://github.com/sabeechen/tanka/issues/1236)) ([bf702ef](https://github.com/sabeechen/tanka/commit/bf702ef1fb562be8f1e998e0468dd7e178f20cac))
* Do not hide diff error details (kubectl &lt; 1.18.0) ([#1078](https://github.com/sabeechen/tanka/issues/1078)) ([43958b7](https://github.com/sabeechen/tanka/commit/43958b733856f319c17aa16caa590241d09fd18c))
* Do not remove data ([#585](https://github.com/sabeechen/tanka/issues/585)) ([4ea9f6b](https://github.com/sabeechen/tanka/commit/4ea9f6b4f2220cd56409203428912d78ae002e4d))
* **docker:** downgrade alpine images ([#499](https://github.com/sabeechen/tanka/issues/499)) ([8e3e951](https://github.com/sabeechen/tanka/commit/8e3e951df941226eb1c6930b04a8fc3fb287395c))
* **docker:** fix warnings in Dockerfile ([#1153](https://github.com/sabeechen/tanka/issues/1153)) ([386e905](https://github.com/sabeechen/tanka/commit/386e9056cf10fe8b71ad2f8d78e1f7aa58a3fec5))
* **docs:** replace deprecated translation API ([#1181](https://github.com/sabeechen/tanka/issues/1181)) ([edc0541](https://github.com/sabeechen/tanka/commit/edc0541c8b8f0ee254967de768fa82b522e0ebba))
* **docs:** Starlight 0.28.3 introduced some changes to the i18n config ([cb76741](https://github.com/sabeechen/tanka/commit/cb767419bbfc2d2408d5c7125c3424ed55568627))
* **docs:** starlight 0.28.3 introduced some changes to the i18n config ([#1219](https://github.com/sabeechen/tanka/issues/1219)) ([cb76741](https://github.com/sabeechen/tanka/commit/cb767419bbfc2d2408d5c7125c3424ed55568627))
* **docs:** typo in faq ([#552](https://github.com/sabeechen/tanka/issues/552)) ([eebea7c](https://github.com/sabeechen/tanka/commit/eebea7cafb54939101f85b85a346ba377b64d935))
* **docs:** use new import style ([#395](https://github.com/sabeechen/tanka/issues/395)) ([f2bcfff](https://github.com/sabeechen/tanka/commit/f2bcfffcd687b0661ba0eed3d51c095ed10e1408))
* EvalScript issues ([#458](https://github.com/sabeechen/tanka/issues/458)) ([aee9fd4](https://github.com/sabeechen/tanka/commit/aee9fd481b6728f75bcee62319ed7449bda421a7))
* handle quotes in --tla-str and --ext-str in "tk eval" ([#1237](https://github.com/sabeechen/tanka/issues/1237)) ([7cba21d](https://github.com/sabeechen/tanka/commit/7cba21d3ea83b20f359516b7dc2e91424c8f48da))
* **helm:** Detect already pulled charts ([#402](https://github.com/sabeechen/tanka/issues/402)) ([1220d14](https://github.com/sabeechen/tanka/commit/1220d149a4f3210d8932f41f415599e88cbbee41))
* **helm:** Pass multiple --api-versions flags to Helm ([#573](https://github.com/sabeechen/tanka/issues/573)) ([#576](https://github.com/sabeechen/tanka/issues/576)) ([13ab03a](https://github.com/sabeechen/tanka/commit/13ab03abf344a80ed2d1dacfc54c7982606a6849))
* If there's a full match on an inline environment name, use it ([#620](https://github.com/sabeechen/tanka/issues/620)) ([a2b5665](https://github.com/sabeechen/tanka/commit/a2b56654f3cf69df9d2a11a31271ee105a3180fd))
* **jpath:** support nested calling again  ([#456](https://github.com/sabeechen/tanka/issues/456)) ([dc54501](https://github.com/sabeechen/tanka/commit/dc54501afca0c156e17599d2d59216b316c69037))
* **jsonnet:** Eval through Loader interface ([#498](https://github.com/sabeechen/tanka/issues/498)) ([f0d6217](https://github.com/sabeechen/tanka/commit/f0d6217b3b50cfca04a3c2f452d831ffd56ad2ce))
* **jsonnet:** Restore tk.env ([#482](https://github.com/sabeechen/tanka/issues/482)) ([2caa673](https://github.com/sabeechen/tanka/commit/2caa67303bcf9b646e462e966ad71896d8cef695))
* **jsonnet:** TLA in export panic ([#519](https://github.com/sabeechen/tanka/issues/519)) ([97ed7fc](https://github.com/sabeechen/tanka/commit/97ed7fc42f8b40e915d0ececb7266a3bf3ce0689))
* **kubernetes-client:** Match context & cluster names exactly ([#948](https://github.com/sabeechen/tanka/issues/948)) ([05f71fe](https://github.com/sabeechen/tanka/commit/05f71fe1b606dbcded0e9eb0f97fbc337958adee))
* make export --format respect "/" in template actions ([#572](https://github.com/sabeechen/tanka/issues/572)) ([72d5517](https://github.com/sabeechen/tanka/commit/72d55175c0039e38de243df30a569557191b4da8)), closes [#568](https://github.com/sabeechen/tanka/issues/568)
* prevent concurrent writes in `env list` command ([#1182](https://github.com/sabeechen/tanka/issues/1182)) ([5a3581d](https://github.com/sabeechen/tanka/commit/5a3581d4625fd5bc08b292b8167e4edcc98e5d52))
* recursive export ([#475](https://github.com/sabeechen/tanka/issues/475)) ([7bd4c9d](https://github.com/sabeechen/tanka/commit/7bd4c9d7de5d14e5e833d7579c769ab6be77bca8))
* Remove unnecessary print statement ([f0b1082](https://github.com/sabeechen/tanka/commit/f0b1082d7712239b0855e8c50265d35582c1878a))
* remove unnecessary print statement ([#1151](https://github.com/sabeechen/tanka/issues/1151)) ([f0b1082](https://github.com/sabeechen/tanka/commit/f0b1082d7712239b0855e8c50265d35582c1878a))
* Replace godirwalk with filepath.WalkDir ([aac92fd](https://github.com/sabeechen/tanka/commit/aac92fdc4e63698af40f10d3c582afd78f48bae5))
* replace godirwalk with filepath.WalkDir ([#1058](https://github.com/sabeechen/tanka/issues/1058)) ([aac92fd](https://github.com/sabeechen/tanka/commit/aac92fdc4e63698af40f10d3c582afd78f48bae5))
* **term:** confirmation prompts on windows ([#413](https://github.com/sabeechen/tanka/issues/413)) ([ebdc788](https://github.com/sabeechen/tanka/commit/ebdc78804863ca44871397e13b0193c10ca414a4)), closes [#347](https://github.com/sabeechen/tanka/issues/347)
* **tool/charts:** \w+ -&gt; .+ ([#380](https://github.com/sabeechen/tanka/issues/380)) ([9a01816](https://github.com/sabeechen/tanka/commit/9a01816fe1b0829abca19f8dc424d65b14ca7d90))
* **tool/imports:** add path info to error message ([#518](https://github.com/sabeechen/tanka/issues/518)) ([6cdc6cf](https://github.com/sabeechen/tanka/commit/6cdc6cf90e44a244d994f5118518a8a1e6580064))
* **tools:** normalize tk fmt paths ([#411](https://github.com/sabeechen/tanka/issues/411)) ([53b5a41](https://github.com/sabeechen/tanka/commit/53b5a41f5121e6012ab18be618763eb4c9bce198))
* Use generateName as last comparison when sorting ([#1031](https://github.com/sabeechen/tanka/issues/1031)) ([63cfe63](https://github.com/sabeechen/tanka/commit/63cfe6313c236fe2fc65d86f831e4624eaafc6a6))


### ⚡ Performance Improvements

* **export:** only call FindEnvs once ([#553](https://github.com/sabeechen/tanka/issues/553)) ([17da685](https://github.com/sabeechen/tanka/commit/17da685bbff3baee75e529b13c19d8f047015395))


### 📝 Documentation

* "envirnoments" typo ([#1080](https://github.com/sabeechen/tanka/issues/1080)) ([2b2324d](https://github.com/sabeechen/tanka/commit/2b2324db3a00cf28772b477a9d2a6d094c89629e))
* Add .nojekyll file to output ([#1027](https://github.com/sabeechen/tanka/issues/1027)) ([879ceb5](https://github.com/sabeechen/tanka/commit/879ceb5d8327de435715549c2b790657ce2b9dcc))
* Add chmod to install instructions ([#724](https://github.com/sabeechen/tanka/issues/724)) ([cfe9627](https://github.com/sabeechen/tanka/commit/cfe9627dcab2321746e5cd2eeb05a6b54a674432))
* add instructions for releasing a new version ([#1120](https://github.com/sabeechen/tanka/issues/1120)) ([c5180bf](https://github.com/sabeechen/tanka/commit/c5180bff80493da1586fc0d05117a5cfde5effa0))
* fix broken link to spec.json Golang source ([#547](https://github.com/sabeechen/tanka/issues/547)) ([9a252b9](https://github.com/sabeechen/tanka/commit/9a252b90024fba2f59e1e4811b540628f01a3013))
* Fix broken links and redirects ([#739](https://github.com/sabeechen/tanka/issues/739)) ([172a56f](https://github.com/sabeechen/tanka/commit/172a56f99b482f78f9ce1236279b86d95e022676))
* fix helm example ([#1037](https://github.com/sabeechen/tanka/issues/1037)) ([a30ac95](https://github.com/sabeechen/tanka/commit/a30ac953daef0e4d69433ab2825a54f79c94a159))
* **helm:** add installing from chartfile section ([#466](https://github.com/sabeechen/tanka/issues/466)) ([3b592ee](https://github.com/sabeechen/tanka/commit/3b592ee2f6cca0a7e5af17eee06687de387a2a39))
* **helm:** Fix Grafana Helm Charts URL ([#426](https://github.com/sabeechen/tanka/issues/426)) ([d36d1e5](https://github.com/sabeechen/tanka/commit/d36d1e58f04406e3a0438106743acfc9798b3ad9))
* **jsonnet:** add kustomize and update helm ([#436](https://github.com/sabeechen/tanka/issues/436)) ([ec5e283](https://github.com/sabeechen/tanka/commit/ec5e283970b13a86cee33b363afa5c9ef35bdce5))
* **k8s:** inline environments ([#437](https://github.com/sabeechen/tanka/issues/437)) ([c02e994](https://github.com/sabeechen/tanka/commit/c02e99422d7adddd6091c5271fc7bcfaabea19ad))
* more docs on inline environments ([#495](https://github.com/sabeechen/tanka/issues/495)) ([c82644e](https://github.com/sabeechen/tanka/commit/c82644e944348f65c928575e4b6473aef64e47af))
* new docs website using Astro + Starlight ([#1025](https://github.com/sabeechen/tanka/issues/1025)) ([49c9b07](https://github.com/sabeechen/tanka/commit/49c9b07b99b8cc30df2a759aa7858afccbd93e8f))
* remove mailinglists from the README ([#1183](https://github.com/sabeechen/tanka/issues/1183)) ([c6557bb](https://github.com/sabeechen/tanka/commit/c6557bb29c04ae9cd480b1add4467ffbd9e7eb00))
* remove statement about importing YAML files ([#1127](https://github.com/sabeechen/tanka/issues/1127)) ([e37bfdf](https://github.com/sabeechen/tanka/commit/e37bfdf264d538c444743669dc83342594f9368a))
* rework tutorial to not use global $ ([#1046](https://github.com/sabeechen/tanka/issues/1046)) ([f4103b5](https://github.com/sabeechen/tanka/commit/f4103b535f93209128033dcf6f0287676dd741a5))
* update gc docs ([#543](https://github.com/sabeechen/tanka/issues/543)) ([f9319de](https://github.com/sabeechen/tanka/commit/f9319defd4c84664933a946672d1b1bce993af93))
* update override method for tanka ([#804](https://github.com/sabeechen/tanka/issues/804)) ([93b1585](https://github.com/sabeechen/tanka/commit/93b1585eb7a2a3a7da5f5fb794299eff0b090c3d))


### 🏗️ Build System

* **deps-dev:** bump prettier from 3.3.0 to 3.3.1 in /docs ([#1063](https://github.com/sabeechen/tanka/issues/1063)) ([83c3589](https://github.com/sabeechen/tanka/commit/83c358998cf995d4a4bf89494433aff290741417))
* **deps-dev:** bump prettier from 3.3.1 to 3.3.2 in /docs ([#1069](https://github.com/sabeechen/tanka/issues/1069)) ([3719a63](https://github.com/sabeechen/tanka/commit/3719a632e4c26d05735f316ee0af850460f366b1))
* **deps:** bump @astrojs/starlight from 0.22.3 to 0.23.2 in /docs ([#1049](https://github.com/sabeechen/tanka/issues/1049)) ([6def867](https://github.com/sabeechen/tanka/commit/6def8678b84bdedca951d8d0b23eb7fab0f9f5ff))
* **deps:** bump @astrojs/starlight from 0.23.2 to 0.24.1 in /docs ([#1061](https://github.com/sabeechen/tanka/issues/1061)) ([8eff4c7](https://github.com/sabeechen/tanka/commit/8eff4c761ea1595b6df95adf65953da19579d81e))
* **deps:** bump @astrojs/starlight from 0.24.1 to 0.24.3 in /docs ([#1071](https://github.com/sabeechen/tanka/issues/1071)) ([de68afe](https://github.com/sabeechen/tanka/commit/de68afebb6d2e9b187310001a3c0bd92f13a2d70))
* **deps:** bump @astrojs/starlight from 0.24.3 to 0.24.4 in /docs ([#1073](https://github.com/sabeechen/tanka/issues/1073)) ([9181c1a](https://github.com/sabeechen/tanka/commit/9181c1a78e4bc99067f6b0cd0a907b503429f0f0))
* **deps:** bump @astrojs/starlight from 0.24.4 to 0.24.5 in /docs ([#1082](https://github.com/sabeechen/tanka/issues/1082)) ([f83381a](https://github.com/sabeechen/tanka/commit/f83381adc30454654e6aa440af3639c6f8d212e0))
* **deps:** bump acceptance-tests-dependencies group in /acceptance-tests with 2 updates ([#1216](https://github.com/sabeechen/tanka/issues/1216)) ([28f3cbf](https://github.com/sabeechen/tanka/commit/28f3cbf76063914b9681017b1ce304f1fac12f80))
* **deps:** bump actions/cache from 4.0.2 to 4.1.0 ([#1184](https://github.com/sabeechen/tanka/issues/1184)) ([e5231d7](https://github.com/sabeechen/tanka/commit/e5231d76cb779f8af0e7072ba10dec9088426ac4))
* **deps:** bump actions/cache from 4.1.0 to 4.1.1 ([#1199](https://github.com/sabeechen/tanka/issues/1199)) ([37cb6e8](https://github.com/sabeechen/tanka/commit/37cb6e8c90a3c8597ab3bd291a17043bd51f6487))
* **deps:** bump actions/cache from 4.1.1 to 4.1.2 ([#1209](https://github.com/sabeechen/tanka/issues/1209)) ([b40b371](https://github.com/sabeechen/tanka/commit/b40b371d3678280d0a1b312ccd5c4de03d2bc50f))
* **deps:** bump actions/checkout from 4.1.7 to 4.2.0 ([#1177](https://github.com/sabeechen/tanka/issues/1177)) ([4bf5238](https://github.com/sabeechen/tanka/commit/4bf5238637d1272f385b3481ec943772528fcdc0))
* **deps:** bump actions/checkout from 4.2.0 to 4.2.1 ([#1200](https://github.com/sabeechen/tanka/issues/1200)) ([a5d960f](https://github.com/sabeechen/tanka/commit/a5d960f926005da44445de557d7863bb53a4c6e2))
* **deps:** bump actions/checkout from 4.2.0 to 4.2.2 ([#1233](https://github.com/sabeechen/tanka/issues/1233)) ([cb5d0c8](https://github.com/sabeechen/tanka/commit/cb5d0c8cafc0d7b855e4210f0e64a205e3cec163))
* **deps:** bump actions/checkout from 4.2.1 to 4.2.2 ([#1210](https://github.com/sabeechen/tanka/issues/1210)) ([bc0078e](https://github.com/sabeechen/tanka/commit/bc0078ecd23848a855c4438f8c4f9933b163ade5))
* **deps:** bump actions/setup-node from 4.0.3 to 4.0.4 ([#1171](https://github.com/sabeechen/tanka/issues/1171)) ([19b1ac0](https://github.com/sabeechen/tanka/commit/19b1ac0a803aaa94ab84fa01d2f066f34d3de47a))
* **deps:** bump actions/setup-node from 4.0.4 to 4.1.0 ([#1212](https://github.com/sabeechen/tanka/issues/1212)) ([8aa8445](https://github.com/sabeechen/tanka/commit/8aa84454b7e66115faa05c7d6e12d96b76526ce7))
* **deps:** bump actions/upload-artifact from 4.3.4 to 4.3.5 ([#1123](https://github.com/sabeechen/tanka/issues/1123)) ([d931860](https://github.com/sabeechen/tanka/commit/d9318601dfbefd9edcc23b1c9a962de36ae32c56))
* **deps:** bump actions/upload-artifact from 4.3.5 to 4.3.6 ([#1130](https://github.com/sabeechen/tanka/issues/1130)) ([8a8b16c](https://github.com/sabeechen/tanka/commit/8a8b16c55b1a64edb394c018900f1bde6a2cd2c1))
* **deps:** bump actions/upload-artifact from 4.3.6 to 4.4.0 ([#1148](https://github.com/sabeechen/tanka/issues/1148)) ([575b0a0](https://github.com/sabeechen/tanka/commit/575b0a07d04b7c680be064396d095e0e0e7fcdb8))
* **deps:** bump actions/upload-artifact from 4.4.0 to 4.4.3 ([#1198](https://github.com/sabeechen/tanka/issues/1198)) ([3342249](https://github.com/sabeechen/tanka/commit/33422490126c1467af9530d90209fffe28294233))
* **deps:** bump astro from 4.10.1 to 4.10.2 in /docs ([#1068](https://github.com/sabeechen/tanka/issues/1068)) ([627fd75](https://github.com/sabeechen/tanka/commit/627fd758eb62fbd12fe599c75ae7b499f4c2bddf))
* **deps:** bump astro from 4.10.2 to 4.11.2 in /docs ([#1079](https://github.com/sabeechen/tanka/issues/1079)) ([6cd0a47](https://github.com/sabeechen/tanka/commit/6cd0a4719e98a9d8613506e87b1fea132da05be8))
* **deps:** bump astro from 4.11.2 to 4.11.3 in /docs ([#1083](https://github.com/sabeechen/tanka/issues/1083)) ([b8930a5](https://github.com/sabeechen/tanka/commit/b8930a55fd8c5e08bf9a284e2f75463d43ace3e1))
* **deps:** bump astro from 4.15.11 to 4.16.1 in /docs ([#1203](https://github.com/sabeechen/tanka/issues/1203)) ([858c419](https://github.com/sabeechen/tanka/commit/858c419dbf65e7fea9ccf58c2329d77ed009f223))
* **deps:** bump astro from 4.8.4 to 4.9.2 in /docs ([#1053](https://github.com/sabeechen/tanka/issues/1053)) ([160cf2f](https://github.com/sabeechen/tanka/commit/160cf2f3383c12e64796be43876c4a8ea9b1cf5a))
* **deps:** bump astro from 4.9.2 to 4.10.1 in /docs ([#1062](https://github.com/sabeechen/tanka/issues/1062)) ([2cb2e37](https://github.com/sabeechen/tanka/commit/2cb2e37de1dbbaf8f11a4ae6afa3664c19fec36e))
* **deps:** bump dagger/dagger-for-github from 5.11.0 to 6.0.0 ([#1103](https://github.com/sabeechen/tanka/issues/1103)) ([545dde4](https://github.com/sabeechen/tanka/commit/545dde4513b8ad361905e7e3ef32be34068d543f))
* **deps:** bump dagger/dagger-for-github from 5.6.0 to 5.11.0 ([#1081](https://github.com/sabeechen/tanka/issues/1081)) ([6f61556](https://github.com/sabeechen/tanka/commit/6f61556b39cc13288299d56769a02f4165ba1cd9))
* **deps:** bump dagger/dagger-for-github from 6.0.0 to 6.1.0 ([#1107](https://github.com/sabeechen/tanka/issues/1107)) ([77c88eb](https://github.com/sabeechen/tanka/commit/77c88ebb464020c8bd85706dbdbafe048c347498))
* **deps:** bump dagger/dagger-for-github from 6.1.0 to 6.3.0 ([#1114](https://github.com/sabeechen/tanka/issues/1114)) ([d1e7d18](https://github.com/sabeechen/tanka/commit/d1e7d18c7ff9c1287b663f58b67ad1f315e7ad2f))
* **deps:** bump dagger/dagger-for-github from 6.11.0 to 6.13.0 ([#1197](https://github.com/sabeechen/tanka/issues/1197)) ([2b5e99d](https://github.com/sabeechen/tanka/commit/2b5e99db4ba48746dd287a71460cecec0451465d))
* **deps:** bump dagger/dagger-for-github from 6.13.0 to 6.14.0 ([#1211](https://github.com/sabeechen/tanka/issues/1211)) ([efcaa43](https://github.com/sabeechen/tanka/commit/efcaa43e4ce435e974b11ac4faee10abe46bf5a0))
* **deps:** bump dagger/dagger-for-github from 6.14.0 to 7.0.1 ([#1224](https://github.com/sabeechen/tanka/issues/1224)) ([932e7ce](https://github.com/sabeechen/tanka/commit/932e7ceecf85aa15b9f855eec47d62c4e8cd254f))
* **deps:** bump dagger/dagger-for-github from 6.3.0 to 6.4.0 ([#1124](https://github.com/sabeechen/tanka/issues/1124)) ([6df254d](https://github.com/sabeechen/tanka/commit/6df254d779b76557c5fbc2d36932e3c0617bf11a))
* **deps:** bump dagger/dagger-for-github from 6.4.0 to 6.5.0 ([#1138](https://github.com/sabeechen/tanka/issues/1138)) ([3b71cdc](https://github.com/sabeechen/tanka/commit/3b71cdceab2aa85a9e8f8ead7f94ec2452138891))
* **deps:** bump dagger/dagger-for-github from 6.5.0 to 6.7.0 ([#1152](https://github.com/sabeechen/tanka/issues/1152)) ([b25e963](https://github.com/sabeechen/tanka/commit/b25e96376ee1fa38e8e67a8b4c87d304c461cbb9))
* **deps:** bump dagger/dagger-for-github from 6.7.0 to 6.8.0 ([#1164](https://github.com/sabeechen/tanka/issues/1164)) ([5bf2aa5](https://github.com/sabeechen/tanka/commit/5bf2aa5556c790de65e6401eb9ab1b95260500bb))
* **deps:** bump dagger/dagger-for-github from 6.8.0 to 6.11.0 ([#1170](https://github.com/sabeechen/tanka/issues/1170)) ([f2f6ca9](https://github.com/sabeechen/tanka/commit/f2f6ca9b92527614c2e37b4dbaff7da904b3f653))
* **deps:** bump docker/build-push-action from 5 to 6 ([#1075](https://github.com/sabeechen/tanka/issues/1075)) ([9766726](https://github.com/sabeechen/tanka/commit/9766726f55484949349955478d6b06113f01ed80))
* **deps:** bump docker/build-push-action from 6.5.0 to 6.7.0 ([#1139](https://github.com/sabeechen/tanka/issues/1139)) ([4fa9d9e](https://github.com/sabeechen/tanka/commit/4fa9d9ee365362d284f1f448ee22e302b6928ada))
* **deps:** bump docker/build-push-action from 6.7.0 to 6.8.0 ([#1178](https://github.com/sabeechen/tanka/issues/1178)) ([e8b727f](https://github.com/sabeechen/tanka/commit/e8b727f46f21392d76335f54c2569a15a3927bec))
* **deps:** bump docker/build-push-action from 6.8.0 to 6.9.0 ([#1186](https://github.com/sabeechen/tanka/issues/1186)) ([c04a553](https://github.com/sabeechen/tanka/commit/c04a553e2eb7e13dfa6b927ba7bb5c8dc0ac0388))
* **deps:** bump docker/metadata-action from 5.5.1 to 5.6.1 ([#1245](https://github.com/sabeechen/tanka/issues/1245)) ([e16af88](https://github.com/sabeechen/tanka/commit/e16af885811ec4302fbce34223529f4907357dd0))
* **deps:** bump docker/setup-buildx-action from 3.5.0 to 3.6.1 ([#1125](https://github.com/sabeechen/tanka/issues/1125)) ([0ba5e9a](https://github.com/sabeechen/tanka/commit/0ba5e9ad8e2cdaddca8c196a126d7bb373b95813))
* **deps:** bump docker/setup-buildx-action from 3.6.1 to 3.7.1 ([#1185](https://github.com/sabeechen/tanka/issues/1185)) ([9f2419a](https://github.com/sabeechen/tanka/commit/9f2419adc532441dbb16acfea4a4fcc89019b1ae))
* **deps:** bump github.com/99designs/gqlgen from 0.17.56 to 0.17.57 in /dagger ([#1244](https://github.com/sabeechen/tanka/issues/1244)) ([c03cb00](https://github.com/sabeechen/tanka/commit/c03cb0098c1079f72ae56d5a69cf3160c5bdef48))
* **deps:** bump github.com/fatih/color from 1.17.0 to 1.18.0 ([#1213](https://github.com/sabeechen/tanka/issues/1213)) ([5bbfea1](https://github.com/sabeechen/tanka/commit/5bbfea1c33b1159d5b607c40e597f0ab825a36fe))
* **deps:** bump github.com/Masterminds/sprig/v3 from 3.2.3 to 3.3.0 ([#1146](https://github.com/sabeechen/tanka/issues/1146)) ([4917824](https://github.com/sabeechen/tanka/commit/4917824a3204378bceda12b73545c782a08dd7a5))
* **deps:** bump github.com/stretchr/testify from 1.9.0 to 1.10.0 ([#1243](https://github.com/sabeechen/tanka/issues/1243)) ([ec8ec69](https://github.com/sabeechen/tanka/commit/ec8ec690057666ee6aeef8d67236d0e9e450d44f))
* **deps:** bump github.com/vektah/gqlparser/v2 from 2.5.16 to 2.5.17 in /dagger ([#1179](https://github.com/sabeechen/tanka/issues/1179)) ([ca2490b](https://github.com/sabeechen/tanka/commit/ca2490b11ca65e2c816e08cd84305b84bc6e39fa))
* **deps:** bump github.com/vektah/gqlparser/v2 from 2.5.17 to 2.5.18 in /dagger ([#1206](https://github.com/sabeechen/tanka/issues/1206)) ([f6cc319](https://github.com/sabeechen/tanka/commit/f6cc3198f5466a2bcbe14c8c181fada4d5d90895))
* **deps:** bump golang from 1.22.3 to 1.22.4 ([#1060](https://github.com/sabeechen/tanka/issues/1060)) ([3f5e064](https://github.com/sabeechen/tanka/commit/3f5e0647aa22131cd683bb409afb7e083d582211))
* **deps:** bump golang from 1.22.4 to 1.22.5 ([#1101](https://github.com/sabeechen/tanka/issues/1101)) ([5a6871c](https://github.com/sabeechen/tanka/commit/5a6871c5fc085b70359a817ee1e388e289c0318a))
* **deps:** bump golang from 1.22.5 to 1.23.0 ([#1140](https://github.com/sabeechen/tanka/issues/1140)) ([65594a1](https://github.com/sabeechen/tanka/commit/65594a121dad227c0e1064dafb328992bb0442f6))
* **deps:** bump golang from 1.23.0 to 1.23.1 ([#1161](https://github.com/sabeechen/tanka/issues/1161)) ([2dc1b3a](https://github.com/sabeechen/tanka/commit/2dc1b3ac4bf647f5df57fe1f13aa2946c48592c3))
* **deps:** bump golang from 1.23.1 to 1.23.2 ([#1188](https://github.com/sabeechen/tanka/issues/1188)) ([816414b](https://github.com/sabeechen/tanka/commit/816414b11fb80a94c50289f3f21accc78a1f6e1f))
* **deps:** bump golang from 1.23.2 to 1.23.3 ([#1227](https://github.com/sabeechen/tanka/issues/1227)) ([576bfe5](https://github.com/sabeechen/tanka/commit/576bfe561c39c783cfe6e1b92918d5483954a060))
* **deps:** bump golang.org/x/sync from 0.7.0 to 0.8.0 in /dagger in the dagger-dependencies group ([#1126](https://github.com/sabeechen/tanka/issues/1126)) ([915adfe](https://github.com/sabeechen/tanka/commit/915adfe94d7e113ba316c9e29eeab816ddfc4a5a))
* **deps:** bump golang.org/x/term from 0.20.0 to 0.21.0 ([#1066](https://github.com/sabeechen/tanka/issues/1066)) ([ca43789](https://github.com/sabeechen/tanka/commit/ca4378913a15dc9207e18c7e8bb737201ee21f56))
* **deps:** bump golang.org/x/term from 0.21.0 to 0.22.0 ([#1100](https://github.com/sabeechen/tanka/issues/1100)) ([7cd5f8e](https://github.com/sabeechen/tanka/commit/7cd5f8e4abcda06a5b112fcba4004b3e7263e9c7))
* **deps:** bump golang.org/x/term from 0.22.0 to 0.23.0 ([#1134](https://github.com/sabeechen/tanka/issues/1134)) ([98273c8](https://github.com/sabeechen/tanka/commit/98273c8f7bea144828bc054267086d455ff416db))
* **deps:** bump golang.org/x/term from 0.23.0 to 0.24.0 ([#1159](https://github.com/sabeechen/tanka/issues/1159)) ([f34799a](https://github.com/sabeechen/tanka/commit/f34799ab4746f8dd00729b075d87c61955a71eeb))
* **deps:** bump golang.org/x/term from 0.24.0 to 0.25.0 ([#1189](https://github.com/sabeechen/tanka/issues/1189)) ([690e02e](https://github.com/sabeechen/tanka/commit/690e02e2ca8816ec80e4fef468cee1882ace1e30))
* **deps:** bump golang.org/x/term from 0.25.0 to 0.26.0 ([#1223](https://github.com/sabeechen/tanka/issues/1223)) ([70d96f8](https://github.com/sabeechen/tanka/commit/70d96f8c1590563aa33a9ce054d484f22e150cc5))
* **deps:** bump golang.org/x/text from 0.15.0 to 0.16.0 ([#1065](https://github.com/sabeechen/tanka/issues/1065)) ([1cd503c](https://github.com/sabeechen/tanka/commit/1cd503c78d786f77b68e2457fdfbe3b2ef6a0995))
* **deps:** bump golang.org/x/text from 0.16.0 to 0.17.0 ([#1135](https://github.com/sabeechen/tanka/issues/1135)) ([c806bf4](https://github.com/sabeechen/tanka/commit/c806bf4708e0ca32b268f97369c68736ffdc0d02))
* **deps:** bump golang.org/x/text from 0.17.0 to 0.18.0 ([#1160](https://github.com/sabeechen/tanka/issues/1160)) ([c835977](https://github.com/sabeechen/tanka/commit/c8359774210eeded8c328065bc4286753973e1f5))
* **deps:** bump golang.org/x/text from 0.18.0 to 0.19.0 ([#1190](https://github.com/sabeechen/tanka/issues/1190)) ([3838e3c](https://github.com/sabeechen/tanka/commit/3838e3cdf0b86703fe48e97c2a06005d3314aa09))
* **deps:** bump golang.org/x/text from 0.19.0 to 0.20.0 ([#1222](https://github.com/sabeechen/tanka/issues/1222)) ([b8119ad](https://github.com/sabeechen/tanka/commit/b8119adc6a5a893d755e01653682dc7bec754f32))
* **deps:** bump JamesIves/github-pages-deploy-action from 4.6.3 to 4.6.4 ([#1158](https://github.com/sabeechen/tanka/issues/1158)) ([232e118](https://github.com/sabeechen/tanka/commit/232e1180cb48fab99bf34449b439606602f74321))
* **deps:** bump JamesIves/github-pages-deploy-action from 4.6.4 to 4.6.8 ([#1176](https://github.com/sabeechen/tanka/issues/1176)) ([1bc883a](https://github.com/sabeechen/tanka/commit/1bc883a57986ee8b3bf35347d830ebb56292f940))
* **deps:** bump JamesIves/github-pages-deploy-action from 4.6.8 to 4.6.9 ([#1225](https://github.com/sabeechen/tanka/issues/1225)) ([e754340](https://github.com/sabeechen/tanka/commit/e754340c4fc6a8ed7b0f12830b1b573bf591f9b4))
* **deps:** bump k8s.io/apimachinery from 0.28.3 to 0.30.2 ([#1070](https://github.com/sabeechen/tanka/issues/1070)) ([1de4aa3](https://github.com/sabeechen/tanka/commit/1de4aa3de2d5c4caa39e83133ee133782d82df38))
* **deps:** bump k8s.io/apimachinery from 0.30.2 to 0.30.3 ([#1110](https://github.com/sabeechen/tanka/issues/1110)) ([55d9dab](https://github.com/sabeechen/tanka/commit/55d9dab6ccb90f2b656c3b705cff6a070dd95224))
* **deps:** bump k8s.io/apimachinery from 0.30.3 to 0.31.0 ([#1136](https://github.com/sabeechen/tanka/issues/1136)) ([bfecbbc](https://github.com/sabeechen/tanka/commit/bfecbbc07829fc808393636f5cd87d24049b385f))
* **deps:** bump k8s.io/apimachinery from 0.31.0 to 0.31.1 ([#1166](https://github.com/sabeechen/tanka/issues/1166)) ([e0f5839](https://github.com/sabeechen/tanka/commit/e0f58392fab4b4167f40b5d41cb09d92257a96ea))
* **deps:** bump k8s.io/apimachinery from 0.31.1 to 0.31.2 ([#1214](https://github.com/sabeechen/tanka/issues/1214)) ([7292514](https://github.com/sabeechen/tanka/commit/7292514cc6849d3a26a4b8e3a7d152578c076ec2))
* **deps:** bump k8s.io/apimachinery from 0.31.2 to 0.31.3 ([#1242](https://github.com/sabeechen/tanka/issues/1242)) ([42663ac](https://github.com/sabeechen/tanka/commit/42663acd25ddc43a9b1e9ad6028ed9318663f86a))
* **deps:** bump rossjrw/pr-preview-action from 1.4.7 to 1.4.8 ([#1172](https://github.com/sabeechen/tanka/issues/1172)) ([cffb7e0](https://github.com/sabeechen/tanka/commit/cffb7e0b36e83b58707030c3a06bbd76ae86eef2))
* **deps:** bump sigs.k8s.io/yaml from 1.3.0 to 1.4.0 in /acceptance-tests ([#1091](https://github.com/sabeechen/tanka/issues/1091)) ([0c5c8b3](https://github.com/sabeechen/tanka/commit/0c5c8b3511e8542275aaf0291c6c3892400f38e4))
* **deps:** bump softprops/action-gh-release from 2.0.8 to 2.0.9 ([#1217](https://github.com/sabeechen/tanka/issues/1217)) ([637f005](https://github.com/sabeechen/tanka/commit/637f00546a9acc3b5ac602186c9b62c277f85805))
* **deps:** bump tailwindcss from 3.4.3 to 3.4.4 in /docs ([#1064](https://github.com/sabeechen/tanka/issues/1064)) ([f102cd2](https://github.com/sabeechen/tanka/commit/f102cd278797ae123d667ded9fe2444817244865))
* **deps:** bump the acceptance-tests-dependencies group in /acceptance-tests with 2 updates ([#1108](https://github.com/sabeechen/tanka/issues/1108)) ([2cbdc89](https://github.com/sabeechen/tanka/commit/2cbdc8987ce0db3ea5c9f0e5e0b5710de1033b85))
* **deps:** bump the acceptance-tests-dependencies group in /acceptance-tests with 2 updates ([#1141](https://github.com/sabeechen/tanka/issues/1141)) ([b9c7d9f](https://github.com/sabeechen/tanka/commit/b9c7d9f12b3a85b5bd1e788a8fb7be9787af91af))
* **deps:** bump the acceptance-tests-dependencies group in /acceptance-tests with 2 updates ([#1165](https://github.com/sabeechen/tanka/issues/1165)) ([1693ebe](https://github.com/sabeechen/tanka/commit/1693ebed6118bc21c39e34772535b3ad9f1f787e))
* **deps:** bump the acceptance-tests-dependencies group with 3 updates ([#1241](https://github.com/sabeechen/tanka/issues/1241)) ([7fdc5e1](https://github.com/sabeechen/tanka/commit/7fdc5e16123ff89871e076a0dffd34f815af7c73))
* **deps:** bump the dagger-dependencies group across 1 directory with 10 updates ([#1147](https://github.com/sabeechen/tanka/issues/1147)) ([19970b3](https://github.com/sabeechen/tanka/commit/19970b37e65bb810305c3c74b918c9660595eebb))
* **deps:** bump the dagger-dependencies group in /dagger with 11 updates ([#1099](https://github.com/sabeechen/tanka/issues/1099)) ([223622a](https://github.com/sabeechen/tanka/commit/223622a7d9ebae290c9f739ef00ea4ebe2a5d6a7))
* **deps:** bump the dagger-dependencies group in /dagger with 2 updates ([#1169](https://github.com/sabeechen/tanka/issues/1169)) ([25572d8](https://github.com/sabeechen/tanka/commit/25572d8bf629e4e0389ae46c58c1a26480332846))
* **deps:** bump the dagger-dependencies group in /dagger with 2 updates ([#1174](https://github.com/sabeechen/tanka/issues/1174)) ([2a38b3a](https://github.com/sabeechen/tanka/commit/2a38b3a47838b200d74747f330eda91090bcf5ee))
* **deps:** bump the dagger-dependencies group in /dagger with 2 updates ([#1187](https://github.com/sabeechen/tanka/issues/1187)) ([d260f41](https://github.com/sabeechen/tanka/commit/d260f4149de119ab7bebe5a183274ed92afeda3d))
* **deps:** bump the dagger-dependencies group in /dagger with 3 updates ([#1235](https://github.com/sabeechen/tanka/issues/1235)) ([7023072](https://github.com/sabeechen/tanka/commit/70230726ab7e42f8716597174f1b8d2ef9eb5bce))
* **deps:** bump the dagger-dependencies group in /dagger with 5 updates ([#1202](https://github.com/sabeechen/tanka/issues/1202)) ([f64b61d](https://github.com/sabeechen/tanka/commit/f64b61dc6c2782c19e6ed9a5c0475b2fe2659bee))
* **deps:** bump the dagger-dependencies group in /dagger with 7 updates ([#1168](https://github.com/sabeechen/tanka/issues/1168)) ([8e0c389](https://github.com/sabeechen/tanka/commit/8e0c3896aeb54c52e105c6118f64ef44d42d2bfc))
* **deps:** bump the dagger-dependencies group in /dagger with 9 updates ([#1221](https://github.com/sabeechen/tanka/issues/1221)) ([ef52a66](https://github.com/sabeechen/tanka/commit/ef52a662b6c7dfb4b833115ad082323566e1eae7))
* **deps:** bump the docs-dependencies group across 1 directory with 2 updates ([#1156](https://github.com/sabeechen/tanka/issues/1156)) ([d93fc71](https://github.com/sabeechen/tanka/commit/d93fc71b5440349a06b315b12ecf63d93d3edfec))
* **deps:** bump the docs-dependencies group across 1 directory with 2 updates ([#1220](https://github.com/sabeechen/tanka/issues/1220)) ([06d542e](https://github.com/sabeechen/tanka/commit/06d542e159d35b22d59ba9a736f7ff995534aed0))
* **deps:** bump the docs-dependencies group across 1 directory with 4 updates ([#1180](https://github.com/sabeechen/tanka/issues/1180)) ([cf9e926](https://github.com/sabeechen/tanka/commit/cf9e926a7e49e172288c1b2d233f102098bcda6b))
* **deps:** bump the docs-dependencies group across 1 directory with 5 updates ([#1145](https://github.com/sabeechen/tanka/issues/1145)) ([719e91c](https://github.com/sabeechen/tanka/commit/719e91c7eb12ac50eaeeb470cd8363ad404814b4))
* **deps:** bump the docs-dependencies group across 1 directory with 5 updates ([#1205](https://github.com/sabeechen/tanka/issues/1205)) ([6a37172](https://github.com/sabeechen/tanka/commit/6a3717206d8bb2534ea6ac28dab769b63142b375))
* **deps:** bump the docs-dependencies group in /docs with 2 updates ([#1098](https://github.com/sabeechen/tanka/issues/1098)) ([8818a4f](https://github.com/sabeechen/tanka/commit/8818a4f5a6287f911335e8de8ce18c22d5505a03))
* **deps:** bump the docs-dependencies group in /docs with 2 updates ([#1191](https://github.com/sabeechen/tanka/issues/1191)) ([7a3ee4f](https://github.com/sabeechen/tanka/commit/7a3ee4f666738558e96efb58f66e38895da02e3c))
* **deps:** bump the docs-dependencies group in /docs with 2 updates ([#1226](https://github.com/sabeechen/tanka/issues/1226)) ([24eeca3](https://github.com/sabeechen/tanka/commit/24eeca32610d1cf668930558ac970161956d2393))
* **deps:** bump the docs-dependencies group in /docs with 2 updates ([#1234](https://github.com/sabeechen/tanka/issues/1234)) ([fe13459](https://github.com/sabeechen/tanka/commit/fe134590c8a0efd25ad2fe916dd7917b5be2d5a5))
* **deps:** bump the docs-dependencies group in /docs with 3 updates ([#1102](https://github.com/sabeechen/tanka/issues/1102)) ([b35a935](https://github.com/sabeechen/tanka/commit/b35a935adb8f093e91bfe169f3791856733fae8b))
* **deps:** bump the docs-dependencies group in /docs with 3 updates ([#1104](https://github.com/sabeechen/tanka/issues/1104)) ([87dc6c8](https://github.com/sabeechen/tanka/commit/87dc6c880d6ae502815f21fc4a0f96744c4c498e))
* **deps:** bump the docs-dependencies group in /docs with 3 updates ([#1109](https://github.com/sabeechen/tanka/issues/1109)) ([7d48662](https://github.com/sabeechen/tanka/commit/7d48662a8626d3451a2c41228ef750e22b834136))
* **deps:** bump the docs-dependencies group in /docs with 3 updates ([#1157](https://github.com/sabeechen/tanka/issues/1157)) ([b8b4cbd](https://github.com/sabeechen/tanka/commit/b8b4cbd7b22621d660c1ae2ce3500eb78316b954))
* **deps:** bump the docs-dependencies group in /docs with 3 updates ([#1240](https://github.com/sabeechen/tanka/issues/1240)) ([48e2c12](https://github.com/sabeechen/tanka/commit/48e2c121b2f7b6a720a1e9a9246b6762749b7ec2))
* **deps:** bump the docs-dependencies group in /docs with 4 updates ([#1115](https://github.com/sabeechen/tanka/issues/1115)) ([2fa2f49](https://github.com/sabeechen/tanka/commit/2fa2f49b2ee8f96a1ba86b26ab0109b33d53acbe))
* **deps:** bump the docs-dependencies group in /docs with 4 updates ([#1122](https://github.com/sabeechen/tanka/issues/1122)) ([fab0e25](https://github.com/sabeechen/tanka/commit/fab0e2548ceefeacf27274f9b77de23796aaf5a8))
* **deps:** bump the docs-dependencies group in /docs with 4 updates ([#1133](https://github.com/sabeechen/tanka/issues/1133)) ([8f19e71](https://github.com/sabeechen/tanka/commit/8f19e715182d460dbb8a4ff1f8e0472b0b1424c0))
* **deps:** bump the docs-dependencies group in /docs with 4 updates ([#1167](https://github.com/sabeechen/tanka/issues/1167)) ([4f44f78](https://github.com/sabeechen/tanka/commit/4f44f78574ac6924a7a332c5c3409488322e1940))
* **deps:** bump typescript from 5.4.5 to 5.5.2 in /docs ([#1072](https://github.com/sabeechen/tanka/issues/1072)) ([0ed60bb](https://github.com/sabeechen/tanka/commit/0ed60bb00a216ee304d36283d1dc12fe99838d48))


### 🤖 Continuous Integration

* create release docker image through workflow-call ([#1246](https://github.com/sabeechen/tanka/issues/1246)) ([fb6380f](https://github.com/sabeechen/tanka/commit/fb6380fb0e46bef6ab1657e9f3bdeeea3997aa35))
* Fix fetch-depth in release workflow ([#1042](https://github.com/sabeechen/tanka/issues/1042)) ([d5d8449](https://github.com/sabeechen/tanka/commit/d5d844986650ba12edf35d1a9537fa602130f7e7))
* fix missing tag name in release draft ([#1118](https://github.com/sabeechen/tanka/issues/1118)) ([1da974d](https://github.com/sabeechen/tanka/commit/1da974d269ef05f9fa308e1714cd8a6485b2723b))
* inject dockerfile dependency versions from workflow ([#1247](https://github.com/sabeechen/tanka/issues/1247)) ([eb9aac0](https://github.com/sabeechen/tanka/commit/eb9aac0f9fa393d9b010d68289cc3981cc7c5a1f))
* lint PR titles ([#1116](https://github.com/sabeechen/tanka/issues/1116)) ([2f62276](https://github.com/sabeechen/tanka/commit/2f6227672c1c94b1d8d362df3452adc61a61c6a7))
* prevent breaking change from creating major release &lt; 1.0.0 ([#1231](https://github.com/sabeechen/tanka/issues/1231)) ([1f34a6e](https://github.com/sabeechen/tanka/commit/1f34a6e5693af10bf0a0d243b51e87be4d017969))
* relevant workflows should react also to ready_for_review ([#1248](https://github.com/sabeechen/tanka/issues/1248)) ([3183efa](https://github.com/sabeechen/tanka/commit/3183efa8cb38abc13db1d8a8e4d585f3d8d6c1fb))
* Remove reference to CHANGELOG in release workflow ([#1041](https://github.com/sabeechen/tanka/issues/1041)) ([cba5ac3](https://github.com/sabeechen/tanka/commit/cba5ac3f320f957195d0a5ba9534dbdfbc7a6452))
* run lint-pr-title workflow on ready_for_review ([#1249](https://github.com/sabeechen/tanka/issues/1249)) ([45c822e](https://github.com/sabeechen/tanka/commit/45c822ed39bef4a50dfc024d6507b5096dd42f71))
* run lint-pr-title workflow on ready-for-review ([45c822e](https://github.com/sabeechen/tanka/commit/45c822ed39bef4a50dfc024d6507b5096dd42f71))
* Run publish-page workflow only on non-forks and docs changes ([#1096](https://github.com/sabeechen/tanka/issues/1096)) ([d53a64e](https://github.com/sabeechen/tanka/commit/d53a64e6a26301471b044484a08045816d822101))
* Support for upload/download-artifacts@4 action ([#979](https://github.com/sabeechen/tanka/issues/979)) ([92ffca5](https://github.com/sabeechen/tanka/commit/92ffca5e8cfa79151fb4eeb34c2e595a4ed3bac8))
* update k3s module to fix breaking acceptance tests ([#1119](https://github.com/sabeechen/tanka/issues/1119)) ([6999896](https://github.com/sabeechen/tanka/commit/6999896b1093f604a618b29d0144dbb793eea2b2))


### 🔧 Miscellaneous Chores

* add catalog-info.yaml for project metadata ([#1194](https://github.com/sabeechen/tanka/issues/1194)) ([2d9ab9a](https://github.com/sabeechen/tanka/commit/2d9ab9a7be30535d5018950eb49dc4bdf470fe86))
* Add codeowners file ([#1085](https://github.com/sabeechen/tanka/issues/1085)) ([f51c85b](https://github.com/sabeechen/tanka/commit/f51c85beed10945a3a3152a63f36813afc9de4d6))
* Add dependabot updates to dagger & acceptance-tests folders ([#1084](https://github.com/sabeechen/tanka/issues/1084)) ([466718a](https://github.com/sabeechen/tanka/commit/466718a0eb781273048fdea9a499cf6883304ce5))
* add support for native `sha256()` function ([#881](https://github.com/sabeechen/tanka/issues/881)) ([e264b4d](https://github.com/sabeechen/tanka/commit/e264b4dda9f6a5ae6357ed873001e57d05c1d53f))
* **ci:** add release-please for release-automation ([#1195](https://github.com/sabeechen/tanka/issues/1195)) ([6918cec](https://github.com/sabeechen/tanka/commit/6918ceccee590e225deb1466fa202211a8a554a6))
* **docker:** add openssh-client to Dockerfile ([#429](https://github.com/sabeechen/tanka/issues/429)) ([2033fc1](https://github.com/sabeechen/tanka/commit/2033fc11c08a0896491c6857e0ca7f1043e5205b))
* **docker:** fix Helm install on armv7 ([#439](https://github.com/sabeechen/tanka/issues/439)) ([d5c1a23](https://github.com/sabeechen/tanka/commit/d5c1a23a72a7b415d3e963fb47d61eb9ff7ab258))
* **docker:** properly handle arm(32) and arm64 ([#441](https://github.com/sabeechen/tanka/issues/441)) ([646b8df](https://github.com/sabeechen/tanka/commit/646b8df1d24427cfb19914cf2cf4fa72e8d5ea2c))
* Group dependency updates ([#1095](https://github.com/sabeechen/tanka/issues/1095)) ([f469574](https://github.com/sabeechen/tanka/commit/f4695749b75a758721f4f6a52cf150233c009a8b))
* **jsonnet:** update to 0.19.1 ([#783](https://github.com/sabeechen/tanka/issues/783)) ([0ddba90](https://github.com/sabeechen/tanka/commit/0ddba90b45f3bb97c7da92a187dd18a5f5363a96))
* **main:** release 0.30.0 ([#1230](https://github.com/sabeechen/tanka/issues/1230)) ([d712789](https://github.com/sabeechen/tanka/commit/d712789d786f6d3892db26af549c37add4d05223))
* **main:** release 0.30.1 ([#1239](https://github.com/sabeechen/tanka/issues/1239)) ([bae4edb](https://github.com/sabeechen/tanka/commit/bae4edb653b26da962ad05c5f124cc0f5443a8ec))
* **packaging:** upgrade to Go 1.15 ([#391](https://github.com/sabeechen/tanka/issues/391)) ([596417c](https://github.com/sabeechen/tanka/commit/596417ca5f264069372c3c09e88668d151ca6f5d))
* **release:** changelog 0.13 ([#440](https://github.com/sabeechen/tanka/issues/440)) ([291814d](https://github.com/sabeechen/tanka/commit/291814d05e298c296a954d8912bce34796e17a3c))
* **release:** Changelog for 0.12 stable ([#398](https://github.com/sabeechen/tanka/issues/398)) ([d392545](https://github.com/sabeechen/tanka/commit/d392545cdca4bb9bc72977fbee3f0b8aed37e48b))
* **release:** Changelog for 0.12-alpha2 ([#382](https://github.com/sabeechen/tanka/issues/382)) ([4a96a91](https://github.com/sabeechen/tanka/commit/4a96a91c7e70f75ddde5685a66794583ac001300))
* **release:** Changelog for 0.12-alpha3 ([#387](https://github.com/sabeechen/tanka/issues/387)) ([1b233aa](https://github.com/sabeechen/tanka/commit/1b233aa7823e6e31a58747291a0b977fc1115d6b))
* **release:** Changelog for 0.14 stable ([#491](https://github.com/sabeechen/tanka/issues/491)) ([4b00e2b](https://github.com/sabeechen/tanka/commit/4b00e2b824c3b113557fd092601b65dedf507fed))
* **release:** Changelog for 0.15 stable ([#542](https://github.com/sabeechen/tanka/issues/542)) ([014fae3](https://github.com/sabeechen/tanka/commit/014fae31d759c37ce1f21cf9ece1f7ce51fa28c1))
* **release:** Changelog for 0.16 stable ([#565](https://github.com/sabeechen/tanka/issues/565)) ([774c664](https://github.com/sabeechen/tanka/commit/774c664789e28909961750a7a23491974a521c1a))
* **release:** Changelog for 0.17 stable ([#580](https://github.com/sabeechen/tanka/issues/580)) ([3a1289b](https://github.com/sabeechen/tanka/commit/3a1289b985301dc55bc24e95bcb1d3e1bdc2e825))
* **release:** Changelog for 0.17.1 ([3bc0931](https://github.com/sabeechen/tanka/commit/3bc0931b899432ab1e9edcff9c4e81a1bd3250b7))
* **release:** Changelog for 0.17.3 ([#599](https://github.com/sabeechen/tanka/issues/599)) ([8b680de](https://github.com/sabeechen/tanka/commit/8b680de501685b534efba32a07dea408454bb73b))
* **release:** correct date in changelog ([b19bc9f](https://github.com/sabeechen/tanka/commit/b19bc9f923aaa510bb0585d64312c4a6ac795383))
* s/k8s-alpha/k8s-libsonnet ([#579](https://github.com/sabeechen/tanka/issues/579)) ([3cad5ef](https://github.com/sabeechen/tanka/commit/3cad5efcd9bb53f6bf62a7e4f8a3e414f634ab70))
* update jsonnet to v0.17.0 ([#445](https://github.com/sabeechen/tanka/issues/445)) ([17baa35](https://github.com/sabeechen/tanka/commit/17baa356eaea5a30c4a88a8950e2dbefb51636e1))
* Use Dockerfile as source for the Go version ([#985](https://github.com/sabeechen/tanka/issues/985)) ([d2637d2](https://github.com/sabeechen/tanka/commit/d2637d2e8501c6c5aed5beda4448860beecccc70))


### 💄 Style

* parallel ([#471](https://github.com/sabeechen/tanka/issues/471)) ([22de89f](https://github.com/sabeechen/tanka/commit/22de89f3176d3f16e6055dd4329239a1cff791f9))


### ♻️ Code Refactoring

* **api:** Evaluators ([#431](https://github.com/sabeechen/tanka/issues/431)) ([94e6f51](https://github.com/sabeechen/tanka/commit/94e6f51d1819ff661b4dc13262d168d75d93be79))
* **api:** Loader interface ([#459](https://github.com/sabeechen/tanka/issues/459)) ([21bdb9e](https://github.com/sabeechen/tanka/commit/21bdb9e27848b52bcb6128ca5ab1e4e35556f91d))
* **api:** use EvalScript on JsonnetOpts ([#457](https://github.com/sabeechen/tanka/issues/457)) ([975a7b9](https://github.com/sabeechen/tanka/commit/975a7b90b60d63fbe71db27a6f8c0f8fe6d1d634))
* **api:** use structs (BREAKING) ([#376](https://github.com/sabeechen/tanka/issues/376)) ([6584a37](https://github.com/sabeechen/tanka/commit/6584a3757697e9d208723996af0eac593bde772f))
* **helm:** Template in interface ([#379](https://github.com/sabeechen/tanka/issues/379)) ([f4c6d46](https://github.com/sabeechen/tanka/commit/f4c6d469b62dc63731d03915f613dd27827a17f4))
* Jsonnet parsing ([#375](https://github.com/sabeechen/tanka/issues/375)) ([e8b3805](https://github.com/sabeechen/tanka/commit/e8b3805e198077e6d1856f40fb25c64c30b7a690))
* parallel ([#473](https://github.com/sabeechen/tanka/issues/473)) ([cbec6fa](https://github.com/sabeechen/tanka/commit/cbec6fa58a6036aa7ab357599de6039df910969c))

## [0.30.1](https://github.com/grafana/tanka/compare/v0.30.0...v0.30.1) (2024-11-26)


### 🐛 Bug Fixes

* handle quotes in --tla-str and --ext-str in "tk eval" ([#1237](https://github.com/grafana/tanka/issues/1237)) ([7cba21d](https://github.com/grafana/tanka/commit/7cba21d3ea83b20f359516b7dc2e91424c8f48da))


### 🏗️ Build System

* **deps:** bump docker/metadata-action from 5.5.1 to 5.6.1 ([#1245](https://github.com/grafana/tanka/issues/1245)) ([e16af88](https://github.com/grafana/tanka/commit/e16af885811ec4302fbce34223529f4907357dd0))
* **deps:** bump github.com/99designs/gqlgen from 0.17.56 to 0.17.57 in /dagger ([#1244](https://github.com/grafana/tanka/issues/1244)) ([c03cb00](https://github.com/grafana/tanka/commit/c03cb0098c1079f72ae56d5a69cf3160c5bdef48))
* **deps:** bump github.com/stretchr/testify from 1.9.0 to 1.10.0 ([#1243](https://github.com/grafana/tanka/issues/1243)) ([ec8ec69](https://github.com/grafana/tanka/commit/ec8ec690057666ee6aeef8d67236d0e9e450d44f))
* **deps:** bump k8s.io/apimachinery from 0.31.2 to 0.31.3 ([#1242](https://github.com/grafana/tanka/issues/1242)) ([42663ac](https://github.com/grafana/tanka/commit/42663acd25ddc43a9b1e9ad6028ed9318663f86a))
* **deps:** bump the acceptance-tests-dependencies group with 3 updates ([#1241](https://github.com/grafana/tanka/issues/1241)) ([7fdc5e1](https://github.com/grafana/tanka/commit/7fdc5e16123ff89871e076a0dffd34f815af7c73))
* **deps:** bump the docs-dependencies group in /docs with 3 updates ([#1240](https://github.com/grafana/tanka/issues/1240)) ([48e2c12](https://github.com/grafana/tanka/commit/48e2c121b2f7b6a720a1e9a9246b6762749b7ec2))


### 🤖 Continuous Integration

* create release docker image through workflow-call ([#1246](https://github.com/grafana/tanka/issues/1246)) ([fb6380f](https://github.com/grafana/tanka/commit/fb6380fb0e46bef6ab1657e9f3bdeeea3997aa35))
* inject dockerfile dependency versions from workflow ([#1247](https://github.com/grafana/tanka/issues/1247)) ([eb9aac0](https://github.com/grafana/tanka/commit/eb9aac0f9fa393d9b010d68289cc3981cc7c5a1f))
* relevant workflows should react also to ready_for_review ([#1248](https://github.com/grafana/tanka/issues/1248)) ([3183efa](https://github.com/grafana/tanka/commit/3183efa8cb38abc13db1d8a8e4d585f3d8d6c1fb))
* run lint-pr-title workflow on ready_for_review ([#1249](https://github.com/grafana/tanka/issues/1249)) ([45c822e](https://github.com/grafana/tanka/commit/45c822ed39bef4a50dfc024d6507b5096dd42f71))
* run lint-pr-title workflow on ready-for-review ([45c822e](https://github.com/grafana/tanka/commit/45c822ed39bef4a50dfc024d6507b5096dd42f71))

## [0.30.0](https://github.com/grafana/tanka/compare/v0.29.0...v0.30.0) (2024-11-22)


### 🎉 Features

* new `tk tool importers-count` ([#1232](https://github.com/grafana/tanka/issues/1232)) ([5dcb6c5](https://github.com/grafana/tanka/commit/5dcb6c5bb56a704ed806c74d37beede93352415a))


### 🐛 Bug Fixes

* delete command supports kinds that do not match singular/plural names ([#1236](https://github.com/grafana/tanka/issues/1236)) ([bf702ef](https://github.com/grafana/tanka/commit/bf702ef1fb562be8f1e998e0468dd7e178f20cac))


### 🏗️ Build System

* **deps:** bump actions/checkout from 4.2.0 to 4.2.2 ([#1233](https://github.com/grafana/tanka/issues/1233)) ([cb5d0c8](https://github.com/grafana/tanka/commit/cb5d0c8cafc0d7b855e4210f0e64a205e3cec163))
* **deps:** bump dagger/dagger-for-github from 6.14.0 to 7.0.1 ([#1224](https://github.com/grafana/tanka/issues/1224)) ([932e7ce](https://github.com/grafana/tanka/commit/932e7ceecf85aa15b9f855eec47d62c4e8cd254f))
* **deps:** bump golang from 1.23.2 to 1.23.3 ([#1227](https://github.com/grafana/tanka/issues/1227)) ([576bfe5](https://github.com/grafana/tanka/commit/576bfe561c39c783cfe6e1b92918d5483954a060))
* **deps:** bump golang.org/x/term from 0.25.0 to 0.26.0 ([#1223](https://github.com/grafana/tanka/issues/1223)) ([70d96f8](https://github.com/grafana/tanka/commit/70d96f8c1590563aa33a9ce054d484f22e150cc5))
* **deps:** bump golang.org/x/text from 0.19.0 to 0.20.0 ([#1222](https://github.com/grafana/tanka/issues/1222)) ([b8119ad](https://github.com/grafana/tanka/commit/b8119adc6a5a893d755e01653682dc7bec754f32))
* **deps:** bump JamesIves/github-pages-deploy-action from 4.6.8 to 4.6.9 ([#1225](https://github.com/grafana/tanka/issues/1225)) ([e754340](https://github.com/grafana/tanka/commit/e754340c4fc6a8ed7b0f12830b1b573bf591f9b4))
* **deps:** bump the dagger-dependencies group in /dagger with 3 updates ([#1235](https://github.com/grafana/tanka/issues/1235)) ([7023072](https://github.com/grafana/tanka/commit/70230726ab7e42f8716597174f1b8d2ef9eb5bce))
* **deps:** bump the dagger-dependencies group in /dagger with 9 updates ([#1221](https://github.com/grafana/tanka/issues/1221)) ([ef52a66](https://github.com/grafana/tanka/commit/ef52a662b6c7dfb4b833115ad082323566e1eae7))
* **deps:** bump the docs-dependencies group in /docs with 2 updates ([#1226](https://github.com/grafana/tanka/issues/1226)) ([24eeca3](https://github.com/grafana/tanka/commit/24eeca32610d1cf668930558ac970161956d2393))
* **deps:** bump the docs-dependencies group in /docs with 2 updates ([#1234](https://github.com/grafana/tanka/issues/1234)) ([fe13459](https://github.com/grafana/tanka/commit/fe134590c8a0efd25ad2fe916dd7917b5be2d5a5))


### 🤖 Continuous Integration

* prevent breaking change from creating major release &lt; 1.0.0 ([#1231](https://github.com/grafana/tanka/issues/1231)) ([1f34a6e](https://github.com/grafana/tanka/commit/1f34a6e5693af10bf0a0d243b51e87be4d017969))
* add release-please for release-automation ([#1195](https://github.com/grafana/tanka/issues/1195)) ([6918cec](https://github.com/grafana/tanka/commit/6918ceccee590e225deb1466fa202211a8a554a6))


## 0.23.1 (2022-09-28)

### Bug Fixes/Enhancements

- **export**: Fix `getSnippetHash` not considering all files
  **[#765](https://github.com/grafana/tanka/pull/765)**

## 0.23.0 (2022-09-26)

### Features

- **cli/tanka**: Add new `--auto-approve=(always|never|if-no-changes)` option to the `apply` command
  **[#754](https://github.com/grafana/tanka/pull/754)**
- **cli/export**: Expand merging capabilities with new `--merge-strategy` flag
  **[#760](https://github.com/grafana/tanka/pull/760)**

### Bug Fixes/Enhancements

- **cli/tanka**: Use exact match to find context from API server
  **[#750](https://github.com/grafana/tanka/pull/750)**
- **helm**: Handle dirs missing the `Chart.yaml` file
  **[#752](https://github.com/grafana/tanka/pull/752)**
- **export**: `getSnippetHash`: Use regexp instead of parsing whole AST for performance
  **[#758](https://github.com/grafana/tanka/pull/758)**

## 0.22.1 (2022-06-15)

### Bug Fixes/Enhancements

- **helm**: Fix `vendor --prune` deleting charts with a custom directory
  **[#717](https://github.com/grafana/tanka/pull/717)**
- **helm**: Add validation at vendoring time for invalid chart names
  **[#718](https://github.com/grafana/tanka/pull/718)**
- **helm**: Fix cross-device link error when tmp is mounted on a different device
  **[#720](https://github.com/grafana/tanka/pull/720)**

## 0.22.0 (2022-06-03)

### Features

- **cli**: Add lint command
  **[#592](https://github.com/grafana/tanka/pull/592)**
- **cli**: Support a diff-strategy of "none" for "tk apply" to suppress diffing
  **[#700](https://github.com/grafana/tanka/pull/700)** (**jphx**)
- **cli**: Add a fallback to inline environment when path doesn't exist
  **[#637](https://github.com/grafana/tanka/pull/637)** (**josephglanville**)
- **kubectl**: Support interactive diff utilities
  **[#690](https://github.com/grafana/tanka/pull/690)** (**partcyborg**)
- **helm**: Allow defining a custom dir for each chart
  **[#706](https://github.com/grafana/tanka/pull/706)**
- **helm**: Add `--prune` option to the vendor command
  **[#707](https://github.com/grafana/tanka/pull/707)**
- **helm**: Check for output dir conflicts
  **[#710](https://github.com/grafana/tanka/pull/710)**
- **cli/tanka**: Adds support for contextNames in tk env subcommands
  **[#704](https://github.com/grafana/tanka/pull/704)** (**Nashluffy**)

### Bug Fixes/Enhancements

- **helm**: Compare semvers when checking if existing chart is up-to-date
  **[#702](https://github.com/grafana/tanka/pull/702)** (**kklimonda-fn**)
- **tanka**: Omit empty `apiServer` or `contextNames` when listing environments
  **[#709](https://github.com/grafana/tanka/pull/709)**
- **export**: Fix caching in case of missing import
  **[#712](https://github.com/grafana/tanka/pull/712)**
- **helm**: Tighten validations for `add` and `add-repo` commands
  **[#713](https://github.com/grafana/tanka/pull/713)**
- **cli/export**: Un-hide the memory ballast setting
  **[#714](https://github.com/grafana/tanka/pull/714)**

## 0.21.0 (2022-04-28)

### Features

- **cli**: Add Apple Silicon binary
  **[#685](https://github.com/grafana/tanka/pull/685)** (**BeyondEvil**)
- **tanka/cli**: Add server-side apply mode
  **[#651](https://github.com/grafana/tanka/pull/651)** (**smuth4**)
- **tanka**: Adds support for specifying valid context names for an environment
  **[#674](https://github.com/grafana/tanka/pull/674)** (**Nashluffy**)

### Bug Fixes/Enhancements

- **cli**: Remove backticks from -inject-labels flag desc
  **[#688](https://github.com/grafana/tanka/pull/688)** (**colega**)
- **tanka**: Fix target must be a non-nil pointer
  **[#684](https://github.com/grafana/tanka/pull/684)** (**maoueh**)
- **tanka**: Upgrade to Go 1.18 + Upgrade dependencies
  **[#697](https://github.com/grafana/tanka/pull/697)**

## 0.20.0 (2022-02-01)

### Features

- **jsonnet**: Update `go-jsonnet` to version 0.18.0
  **[#660](https://github.com/grafana/tanka/pull/660)**
- **cli**: Add `--dry-run` kubectl option
  **[#667](https://github.com/grafana/tanka/pull/667)**
- **helm**: Add option to pass `--skip-tests`
  **[#654](https://github.com/grafana/tanka/pull/654)** (**jouve**)
- **export**: Introduce a configurable memory ballast
  **[#669](https://github.com/grafana/tanka/pull/669)**

## 0.19.0 (2021-11-22)

### Notice

The go.yaml library's version lock was removed. Sequence items in YAML generated from the `manifestYamlFromJson` native function will have a different indent level.

If you are exporting manifests from multiple environments with `tk export` and you wish to do it gradually, you can do it using the `--selector` argument. Here's an example where environments have a `cluster` label:

```console
// Export the dev cluster with the new version
tk-new export outputs-dir tanka-dir --merge --selector cluster=dev
// Export other clusters with the old version
tk export outputs-dir tanka-dir --merge --selector cluster!=dev
```

### Bug Fixes

- **helm**: match `Add()` and `AddRepos()` and correct typos
  **[#641](https://github.com/grafana/tanka/pull/641)** (**redradrat**)
- **yaml**: Remove yaml.v3's version lock
  **[#643](https://github.com/grafana/tanka/pull/643)**

## 0.18.2 (2021-10-14)

### Features

- **cli**: Add `--max-stack` jsonnet option
  **[#619](https://github.com/grafana/tanka/pull/619)**

### Bug Fixes/Enhancements

- **cli**: If there's a full match on an inline environment name, use it
  **[#620](https://github.com/grafana/tanka/pull/620)**
- **cli**: Add instructions to use `--name` on multiple envs error
  **[#621](https://github.com/grafana/tanka/pull/621)**
- **export**: Remove unnecessary `os.Stat` in eval cache
  **[#624](https://github.com/grafana/tanka/pull/624)**
- **tanka**: Upgrade to Go 1.17
  **[#625](https://github.com/grafana/tanka/pull/625)**
- **jsonnet**: Fix `std.thisFile`
  **[#626](https://github.com/grafana/tanka/pull/626)**

## 0.18.1 (2021-10-04)

### Bug Fixes

- **kubernetes**: Fix api-resources table parsing
  **[#605](https://github.com/grafana/tanka/pull/605)**
- **yaml**: Revert yaml.v3 bump due to changes to indent
  **[#616](https://github.com/grafana/tanka/pull/616)**

## 0.18.0 (2021-10-01)

### Features

- **export**: Implement environment caching for `tk export`
  **[#603](https://github.com/grafana/tanka/pull/603)**
- **cli**: Allow partial matches in the --name option
  **[#613](https://github.com/grafana/tanka/pull/613)**

### Bug Fixes

- **tanka**: Check executable prefix before calling stat
  **[#601](https://github.com/grafana/tanka/pull/601)**  (**neerolyte**)
- **cli**: Add hint to inline environment error
  **[#606](https://github.com/grafana/tanka/pull/606)**
- **cli**: Bump cli to `0.2.0`
  **[#611](https://github.com/grafana/tanka/pull/611)**
- **cli**: Add check to prevent using `spec.json` and inline envs simultaneously
  **[#614](https://github.com/grafana/tanka/pull/614)**

## 0.17.3 (2021-08-16)

### Features

- **docker**: Add Kustomize binary
  **([#597](https://github.com/grafana/tanka/pull/597))**

## 0.17.2 (2021-08-10)

### Bug Fixes

- **export**: Add more context when extract fails
  **([#583](https://github.com/grafana/tanka/pull/583))**
- **tanka**: Do not remove `data`, hide it
  **([#585](https://github.com/grafana/tanka/pull/585))**

## 0.17.1 (2021-07-08)

### Bug Fixes

- **cli**: Preserve compatibility for `tk init --k8s=false`
  **([#582](https://github.com/grafana/tanka/pull/582))** (**harmjanblok**)

## 0.17.0 (2021-07-02)

:tada: Big shout out to the community in this release, well done!

### Features

- **helm**: Add support to specify `--kube-version`
  **([#578](https://github.com/grafana/tanka/pull/578))** (**@olegmayko**)
- **kubectl**: Add "validate" diff strategy with `kubectl diff --server-side`
  **([#538](https://github.com/grafana/tanka/pull/538))**

### Bug Fixes

- **helm**: Pass multiple `--api-versions` flags
  **([#576](https://github.com/grafana/tanka/pull/576))** (**@jtdoepke**)
- **jsonnet**: Handle TLA code properly
  **([#574](https://github.com/grafana/tanka/pull/574))** (**@mihaitodor**)
- **export**: Make `--format` respect "/" in template actions
  **([#572](https://github.com/grafana/tanka/pull/572))** (**@dewe**)


## 0.16.0 (2021-06-01)

#### :sparkles: Tanka now defaults to [`k8s-alpha`](https://github.com/jsonnet-libs/k8s-alpha)

`tk init` will now install `k8s-alpha` as the default library for `k.libsonnet`. It is currently defaults to Kubernetes v1.20 however you can pick your own version or disable it:

```console
tk init --k8s=1.18
tk init --k8s=false
```

### Features

- **cli** :sparkles:: `tk init` now defaults to [`k8s-alpha`](https://github.com/jsonnet-libs/k8s-alpha)
  **([#563](https://github.com/grafana/tanka/pull/563))**

### Bug Fixes

- **kubernetes**: Remove resources with altered state
  **([#539](https://github.com/grafana/tanka/pull/539))** (**@StevenPG**)


## 0.15.1 (2021-04-27)

### Features

- **helm**: Add support for `--no-hooks` switch in Helm template
  **([#545](https://github.com/grafana/tanka/pull/545))** (**@PatTheSilent**)
- **export**: Only call FindEnvs once
  **([#553](https://github.com/grafana/tanka/pull/553))**

### Bug Fixes

- **kubernetes**: Don't fail on listing namespaces
  **([#549](https://github.com/grafana/tanka/pull/549))**

## 0.15 (2021-03-22)

Half the changes introduced in this version come from the community, great job y'all!

#### :warning: Pruning label changed

With enabling pruning on inline environments
([#511](https://github.com/grafana/tanka/pull/511)) we fixed pruning. Instead of just
setting the prune label `tanka.dev/environment` to the environment name, Tanka now sets it
to a hash of the environment name and path it is on.

This solves 2 problems:

* Ensures pruning works properly on inline environments.
* Label values in Kubernetes have a 63 characters limit, environment names can be longer.

The effect of this is that all environments using `spec.injectLabels` will show a diff
on the `tanka.dev/environment` label. To ensure a proper migration, execute `tk apply` and
`tk prune` with Tanka v0.14 before running v0.15 so all stale objects are pruned before
the label changes.

Thanks **@craigfurman** for pulling this together.

### Features

- **cli**: Add  `tk env add|set --inject-labels` flag
  **([#505](https://github.com/grafana/tanka/pull/505))** (**@curusarn**)
- **cli**: Add `tk diff --exit-zero` flag
  **([#506](https://github.com/grafana/tanka/pull/506))** (**@craigfurman**)
- **cli**: `tk env list` sorts environments by name
  **([#521](https://github.com/grafana/tanka/pull/521))**
- **cli**: Pruning warns before deleting namespaces
  **([#531](https://github.com/grafana/tanka/pull/531))**
- **cli**: Add `tk status --name` flag and sort Spec.data
  **([#533](https://github.com/grafana/tanka/pull/533))**

* **tooling**: `tk tool imports` works on both files and paths
  **([#517](https://github.com/grafana/tanka/pull/517))**
* **kubernetes**: support .metadata.generateName
  **([#529](https://github.com/grafana/tanka/pull/529))** (**@wojciechka**)
* **helm**: Only update helm repositories when necessary
  **([#535](https://github.com/grafana/tanka/pull/535))** (**@craigfurman**)

### Bug Fixes

- **cli** :sparkles:: Enable pruning on inline environments
  **([#511](https://github.com/grafana/tanka/pull/511))** (**@craigfurman**)
- **cli**: Do not silently fail on find/List
  **([#515](https://github.com/grafana/tanka/pull/515))**
- **cli**: Split diff and non-diff output
  **([#537](https://github.com/grafana/tanka/pull/537))** (**@craigfurman**)

* **tooling**: `tk tool imports` shows path info to error message
  **([#518](https://github.com/grafana/tanka/pull/518))**
* **jsonnet**: TLA in export panic
  **([#519](https://github.com/grafana/tanka/pull/519))** (**@morlay**)

## 0.14 (2021-02-03)

#### :building_construction: Multiple inline environments

As a next step in the inline environment area, this release supports multiple inline
environments. In case there are multiple environments in your workflow, you can use
`--name` to specify the environment you want to diff or apply.

```console
tk apply --name us-central1 environments/dev
tk diff --name europe-west2 environments/prod
```

#### :hammer: Export multiple environments

As part of Grafana Labs' continuous delivery setup, we developed a fast and effective way
to export all our environments. In v0.14, we have built this into `tk export`.

> :warning: breaking change: the arguments for `tk export` have switched places!

`path` to an environment can be added multiple times:

```console
tk export <outputDir> <path> [<path>...] [flags]
```

Some examples:

```bash
# Format based on environment {{env.<...>}}
$ tk export exportDir environments/dev/ --format '{{env.metadata.labels.cluster}}/{{env.spec.namespace}}//{{.kind}}-{{.metadata.name}}'
# Export multiple environments
$ tk export exportDir environments/dev/ environments/qa/
# Recursive export
$ tk export exportDir environments/ --recursive
# Recursive export with labelSelector
$ tk export exportDir environments/ -r -l team=infra
```

### Features

- **tanka** :sparkles:: Handle multiple inline environments
  **([#476](https://github.com/grafana/tanka/pull/476))**
- **jsonnet**: Vendor jsonnet v0.17.0
  **([#445](https://github.com/grafana/tanka/pull/445))**

* **cli**: Extend Tanka with scripts through `tk-` prefix on PATH
  **([#412](https://github.com/grafana/tanka/pull/412))**
* **cli** :sparkles:: Export multiple environments with a single `tk export` command
  **([#450](https://github.com/grafana/tanka/pull/450))**
* **cli**: Initialize inline environments
  **([#451](https://github.com/grafana/tanka/pull/451))**
* **cli**: Add Helm Chart repositories with `tk tool charts add-repo`
  **([#455](https://github.com/grafana/tanka/pull/455))**
* **cli**: Add `--with-prune` option for `tk diff`
  **([#469](https://github.com/grafana/tanka/pull/469))** (**@curusarn**)

- **api**: `Loader` interface
  **([#459](https://github.com/grafana/tanka/pull/459),
  [#467](https://github.com/grafana/tanka/pull/467))**
- **api**: Faster environment discovery and faster `tk env list`
  **([#468](https://github.com/grafana/tanka/pull/468))**

### Bug Fixes

- **jpath**: Support nested calling again
  **([#456](https://github.com/grafana/tanka/pull/456))**
- **cli**: Ensure TLACode works with `EvalScript`
  **([#464](https://github.com/grafana/tanka/pull/464))**
- **jsonnet**: Restore tk.env
  **([#482](https://github.com/grafana/tanka/pull/482),
  [#498](https://github.com/grafana/tanka/pull/498))**

### BREAKING

- **cli**: The argument order of `tk export` changed due to 
  **[#450](https://github.com/grafana/tanka/pull/450)**:

```console
# old:
$ tk export <environment> <outputDir>

# new:
$ tk export <outputDir> <environment> [<environment...>]
```

## 0.13 (2020-12-11)

#### :building_construction: Inline environments

One of the most debated features of the past months has landed: defining Tanka
Environments inline. It is now possible to leverage all powerful Jsonnet
concepts to modify your Tanka Environments. See
https://tanka.dev/inline-environments for more details.

#### :wheel_of_dharma: Kustomize support

In 0.12 we brought in [Helm support](#wheel_of_dharma-helm-support), similarly
Tanka now also comes with Kustomize support.

* We have refactored `helm-util` into
  [`tanka-util`](https://github.com/grafana/jsonnet-libs/blob/master/tanka-util)
  to support both `helm.template()` and `kustomize.build()` use cases from a
  common base.
* Jsonnet-native overwriting of Kustomizations

Have a look at https://tanka.dev/kustomize on how to use all this goodness.
Also https://tanka.dev/helm has been updated to match the library changes.

> This feature is currently experimental. We believe it is feature complete, but
> further usage in the field may lead to adjustments

#### :sparkles: Export `JSONNET_PATH`

Tanka :heart: Jsonnet, and so do you. With this release, you can now access the
`JSONNET_PATH` that Tanka uses to find all libraries. Try something this in your
environment:

```console
$ JSONNET_PATH=$(tk tool jpath environments/prometheus) jsonnet-lint environments/prometheus/main.jsonnet
```

#### :speech_balloon: Github Discussions

The Tanka project is trying out GitHub Discussions as the primary support channel:

- :mag: It is searchable, so information never gets lost in Slack again
- :busts_in_silhouette: No longer sign-up for two platforms
- :mega: Reach both, the team and other community members

Head over to https://github.com/grafana/tanka/discussions and start the discussion!

### Features

- **jsonnet**: Allow alternative entrypoints
  **([#389](https://github.com/grafana/tanka/pull/389))**
- **jsonnet** :sparkles:: Support for inline environment
  **([#403](https://github.com/grafana/tanka/pull/403))**
- **jsonnet, cli** :sparkles:: `tk tool jpath` can be used to export `JSONNET_PATH`
  **([#427](https://github.com/grafana/tanka/pull/427))**
- **jsonnet, docker**: Add `openssh-client` to Docker image
  **([#429](https://github.com/grafana/tanka/pull/429))** (**@xvzf**)

* **k8s** :sparkles:: Render Kustomize into Jsonnet
  **([#422](https://github.com/grafana/tanka/pull/422))**
* **k8s**: Add `metadata.Namespace` directive, always the path relative to the project root
  **([#435](https://github.com/grafana/tanka/pull/435))**

- **helm**: Chart tool: Check chart versions and update accordingly
  **([#420](https://github.com/grafana/tanka/pull/420))** (**@craigfurman**)
- **helm,docker**: Add `helm` client to Docker image
  **([#430](https://github.com/grafana/tanka/pull/430))** (**@ducharmemp**)

* **api**: Introduce the concept of Evaluators
  **([#431](https://github.com/grafana/tanka/pull/431))**


### Bug Fixes

- **helm**: Chart tool: Detect already pulled charts
  **([#402](https://github.com/grafana/tanka/pull/402))** (**justinwalz**)
- **helm**: Chart tool: Use new URL for stable helm repo
  **([#425](https://github.com/grafana/tanka/pull/425))**

* **cli**: Environment path as name relative to the project root
  **([#404](https://github.com/grafana/tanka/pull/404))** (**mwasilew2**)
* **cli**: Normalize `tk fmt` paths on Windows
  **([#411](https://github.com/grafana/tanka/pull/411))** (**nlowe**)
* **cli**: Confirmation prompts on Windows
  **([#413](https://github.com/grafana/tanka/pull/413))** (**nlowe**)


## 0.12 (2020-10-05)

Like good wine, some things need time. After 3 months of intense development we
have another Tanka release ready:

#### :wheel_of_dharma: Helm support

This one is huge! Tanka can now **load Helm Charts**:

- [`helm-util`](https://github.com/grafana/jsonnet-libs/tree/master/helm-util)
  provides `helm.template()` to load them from inside Jsonnet
- Declarative vendoring using `tk tool charts`
- Jsonnet-native overwriting of chart contents

Just by upgrading to 0.12, you have access to every single Helm chart on the
planet, right inside of Tanka! Read more on https://tanka.dev/helm

> This feature is currently experimental. We believe it is feature complete, but
> further usage in the field may lead to adjustments

#### :house: Top Level Arguments

Tanka now supports the `--tla-str` and `--tla-code` flags from the `jsonnet` cli
to late-bind data into the evaluation in a well-defined way. See
https://tanka.dev/jsonnet/injecting-values for more details.

#### :sparkles: Inline Eval

Ever wanted to pull another value out of Jsonnet that does not comply to the
Kubernetes object rules Tanka imposes onto everything? Wait no longer and use
`tk eval -e`:

```console
$ tk eval environments/prometheus -e prometheus_rules
```

Above returns `$.prometheus_rules` as JSON. Every Jsonnet selector is supported:

```console
$ tk eval environments/prometheus -e 'foo.bar[0]'
```

### Features

- **k8s, jsonnet** :sparkles:: Support for [Helm](https://helm.sh). In combination with
  [`helm-util`](https://github.com/grafana/jsonnet-libs/tree/master/helm-util),
  Tanka can now load resources from Helm Charts.
  **([#336](https://github.com/grafana/tanka/pull/336))**
- **k8s**: Default metadata from `spec.json`
  **([#366](https://github.com/grafana/tanka/pull/366))**

* **helm**: Charttool: Adds `tk tool charts` for easy management of vendored
  Helm charts **([#367](https://github.com/grafana/tanka/pull/367))**,
  **([#369](https://github.com/grafana/tanka/pull/369))**
* **helm**: Require Helm Charts to be available locally
  **([#370](https://github.com/grafana/tanka/pull/370))**
* **helm**: Configurable name format
  **([#381](https://github.com/grafana/tanka/pull/381))**

- **cli**: Filtering (`-t`) now supports negative expressions (`-t !deployment/.*`) to exclude resources
  **([#339](https://github.com/grafana/tanka/pull/339))**
- **cli** :sparkles:: Inline eval (Use `tk eval -e` to extract nested fields)
  **([#378](https://github.com/grafana/tanka/pull/378))**
- **cli**: Custom paging (`PAGER` env var)
  **([#373](https://github.com/grafana/tanka/pull/373))**
- **cli**: Predict plain directories if outside a project
  **([#357](https://github.com/grafana/tanka/pull/357))**

* **jsonnet** :sparkles:: Top Level Arguments can now be specified using `--tla-str` and
  `--tla-code` **([#340](https://github.com/grafana/tanka/pull/340))**

### Bug Fixes

- **yaml**: Pin yaml library to v2.2.8 to avoid whitespace changes
  **([#386](https://github.com/grafana/tanka/pull/386))**
- **cli**: Actually respect `TANKA_JB_PATH`
  **([#350](https://github.com/grafana/tanka/pull/350))**
- **k8s**: Update `kubectl v1.18.0` warning
  **([#371](https://github.com/grafana/tanka/pull/371))**

* **jsonnet**: Load `main.jsonnet` using full path. This makes `std.thisFile`
  usable **([#370](https://github.com/grafana/tanka/pull/370))**
* **jsonnet**: Import path resolution now works on Windows
  **([#331](https://github.com/grafana/tanka/pull/331))**
* **jsonnet**: Arrays are now supported at the top level
  **([#321](https://github.com/grafana/tanka/pull/321))**

### BREAKING

- **api**: Struct based Go API: Modifies our Go API
  (`github.com/grafana/tanka/pkg/tanka`) to be based on structs instead of
  variadic arguments. This has no impact on daily usage of Tanka.
  **([#376](https://github.com/grafana/tanka/pull/376))**
- **jsonnet**: ExtVar flags are now `--ext-str` and `--ext-code` (were `--extVar` and `--extCode`)
  **([#340](https://github.com/grafana/tanka/pull/340))**

## 0.11.1 (2020-07-17)

This is a minor release with one bugfix and one minor feature.

### Features

- **process**: With 0.11.0, tanka started automatically adding namespaces to _all_ manifests it processed. We updated this to _not_
  add a namespace to cluster-wide object types in order to make handling of these resources more consistent in different workflows. **([#320](https://github.com/grafana/tanka/pull/320))**

### Bug Fixes

- **export**: Fix inverted logic while checking if a file already exists. This broke `tk export` entirely.
  **([#317](https://github.com/grafana/tanka/pull/317))**

## 0.11.0 (2020-07-07)

2 months later and here we are with another release! Packed with many
detail-improvements, this is what we want to highlight:

#### :sparkles: Enhanced Kubernetes resource handling

From now on, Tanka handles the resources it extracts from your Jsonnet output in
an enhanced way:

1. **Lists**: Contents of lists, such as `RoleBindingList` are automatically
   flattened into the resource stream Tanka works with. This makes sure they are
   properly labeled for garbage collection, etc.
2. **Default namespaces**: While you could always define the default namespace
   (the one for resources without an explicit one) in `spec.json`, this
   information is now also persisted into the YAML returned by `tk show` and `tk export`.
   See https://tanka.dev/namespaces for more information.

#### :hammer: More powerful exporting

`tk export` can now do even more than just writing YAML files to disk:

1. `--extension` can be used to control the file-extension (defaults to `.yaml`)
2. When you put a `/` in your `--format` for the filename, Tanka creates a
   directory or you. This allows e.g. sorting by namespace:
   `--format='{{.metadata.namespace}}/{{.kind}}-{{.metadata.name}}'`
3. Using `--merge`, you can export multiple environments into the same directory
   tree, so you get the full YAML picture of your entire cluster!

#### :fax: Easier shell scripting

The `tk env list` command now has a `--names` option making it easy to operate on multiple environments:

```bash
# diff all environments:
for e in $(tk env list --names); do
  tk diff $e;
done
```

Also, to use a more granular subset of your environments, you can now use
`--selector` / `-l` to match against `metadata.labels` of defined in your
`spec.json`:

```bash
$ tk env list -l status=dev
```

### Features

- **cli**: `tk env list` now supports label selectors, similar to `kubectl get -l` **([#295](https://github.com/grafana/tanka/pull/295))**
- **cli**: If `spec.apiServer` of `spec.json` lacks a protocol, it now defaults
  to `https` **([#289](https://github.com/grafana/tanka/pull/289))**
- **cli**: `tk delete` command to teardown environments
  **([#313](https://github.com/grafana/tanka/pull/313))**

* **cli**: Support different file-extensions than `.yaml` for `tk export`
  **([#294](https://github.com/grafana/tanka/pull/394))** (**@marthjod**)
* **cli**: Support creating sub-directories in `tk export`
  **([#300](https://github.com/grafana/tanka/pull/300))** (**@simonfrey**)
* **cli**: Allow writing into existing folders during `tk export`
  **([#314](https://github.com/grafana/tanka/pull/314))**

- **tooling**: `tk tool imports` now follows symbolic links
  **([#302](https://github.com/grafana/tanka/pull/302))**,
  **([#303](https://github.com/grafana/tanka/pull/303))**

* **process**: `List` types are now unwrapped by Tanka itself
  **([#306](https://github.com/grafana/tanka/pull/306))**
* **process**: Automatically set `metadata.namespace` to the value of
  `spec.namespace` if not set from Jsonnet
  **([#312](https://github.com/grafana/tanka/pull/312))**

### Bug Fixes

- **jsonnet**: Using `import "tk"` twice no longer panics
  **([#290](https://github.com/grafana/tanka/pull/290))**
- **tooling**: `tk tool imports` no longer gets stuck when imports are recursive
  **([#298](https://github.com/grafana/tanka/pull/298))**
- **process**: Fully deterministic recursion, so that error messages are
  consistent **([#307](https://github.com/grafana/tanka/pull/307))**

## 0.10.0 (2020-05-07)

New month, new release! And this one ships with a long awaited feature:

#### :sparkles: Garbage collection

Tanka can finally clean up behind itself. By optionally attaching a
`tanka.dev/environment` label to each resource it creates, we can find these
afterwards and purge those removed from the Jsonnet code. No more dangling
resources!

> :warning: Keep in mind this is still experimental!

To get started, enable labeling in your environment's `spec.json`:

```diff
  "spec": {
+   "injectLabels": true,
  }
```

Don't forget to `tk apply` afterwards! From now on, Tanka can clean up using `tk prune`.

Docs: https://tanka.dev/garbage-collection

#### :boat: Logo

Tanka now has it's very own logo, and here it is:

<img src="docs/img/logo.svg" width="400px" />

#### :package: Package managers

Tanka is now present in some package managers, notably `brew` for macOS and the
AUR of ArchLinux! See the updated [install
instructions](https://tanka.dev/install#using-a-package-manager-recommended) to
make sure to use these if possible.

### Features:

- **cli**: `TANKA_JB_PATH` environment variable introduced to set the `jb`
  binary if required **([#272](https://github.com/grafana/tanka/pull/272))**.
  Thanks [@qckzr](https://github.com/qckzr)

* **kubernetes**: Garbage collection
  **([#251](https://github.com/grafana/tanka/pull/251))**

### Bug Fixes

- **kubernetes**: Resource sorting is now deterministic
  **([#259](https://github.com/grafana/tanka/pull/259))**

## 0.9.2 (2020-04-19)

Mini-release to fix an issue with our Makefile (required for packaging). No
changes in functionality.

### Bug Fixes

- **build**: Enable `static` Makefile target on all operating systems
  ([#262](https://github.com/grafana/tanka/pull/262))

## 0.9.1 (2020-04-08)

Small patch release to fix a `panic` issue with `tk apply`.

### Bug Fixes

- **kubernetes**: don't panic on failed diff
  **([#256](https://github.com/grafana/tanka/pull/256))**

## 0.9.0 (2020-04-07)

**This release includes a critical fix, update ASAP**.

Another Tanka release is here, just in time for Easter. Enjoy the built-in
[formatter](#sparkles-highlight-jsonnet-formatter-tk-fmt), much [more
intelligent apply](#rocket-highlight-sorting-during-apply) and several important
bug fixes.

#### :rotating_light: Alert: `kubectl diff` changes resources :rotating_light:

The recently released `kubectl` version `v1.18.0` includes a **critical issue**
that causes `kubectl diff` (and so `tk diff` as well) to **apply** the changes.

This can be very **harmful**, so Tanka decided to require you to **downgrade**
to `v1.17.x`, until the fix in `kubectl` version `v1.18.1` is released.

- Upstream issue: https://github.com/kubernetes/kubernetes/issues/89762)
- Unreleased fix: https://github.com/kubernetes/kubernetes/pull/89795

#### :sparkles: Highlight: Jsonnet formatter (`tk fmt`)

Since `jsonnetfmt` was [rewritten in Go
recently](https://github.com/google/go-jsonnet/pull/388), Tanka now ships it as
`tk fmt`. Just run `tk fmt .` to keep all Jsonnet files recursively formatted.

#### :rocket: Highlight: Sorting during apply

When using `tk apply`, Tanka now automatically **sorts** your objects
based on **dependencies** between them, so that for example
`CustomResourceDefinitions` created before being used, all in the same run. No
more partly failed applies!

### Features

- **kubernetes** :sparkles:: Objects are now sorted by dependency before `apply`
  **([#244](https://github.com/grafana/tanka/pull/244))**
- **cli**: Env var `TANKA_KUBECTL_PATH` can now be used to set a custom
  `kubectl` binary
  **([#221](https://github.com/grafana/tanka/pull/221))**
- **jsonnet** :sparkles: : Bundle `jsonnetfmt` as `tk fmt`
  **([#241](https://github.com/grafana/tanka/pull/241))**

* **docker**: The Docker image now includes GNU `less`, instead of the BusyBox
  one **([#232](https://github.com/grafana/tanka/pull/232))**
* **docker**: Added `kubectl`, `jsonnet-bundler`, `coreutils`, `git` and
  `diffutils` to the Docker image, so Tanka can be fully used in there.
  **([#243](https://github.com/grafana/tanka/pull/243))**

### Bug Fixes

- **cli**: The diff shown on `tk apply` is now colored again
  **([#216](https://github.com/grafana/tanka/pull/216))**

* **client**: The namespace patch file saved to a temporary location is now
  removed after run **([#225](https://github.com/grafana/tanka/pull/225))**
* **client**: Scanning for the correct context won't panic anymore, but print a
  proper error **([#228](https://github.com/grafana/tanka/pull/228))**
* **client**: Use `os.PathListSeparator` during context patching, so that Tanka
  also works on non-UNIX platforms (e.g. Windows)
  **([#242](https://github.com/grafana/tanka/pull/242))**

- **kubernetes** :rotating_light:: Refuse to diff on `kubectl` version `v1.18.0`, because of
  above mentioned unfixed issue
  **([#254](https://github.com/grafana/tanka/pull/254))**
- **kubernetes**: Apply no longer aborts when diff fails
  **([#231](https://github.com/grafana/tanka/pull/231))**
- **kubernetes** :sparkles:: Namespaces that will be created in the same run are now
  properly handled during `diff`
  **([#237](https://github.com/grafana/tanka/pull/237))**

### Other

- **cli**: Migrates from `spf13/cobra` to much smaller `go-clix/cli`. This cuts
  our dependencies to a minimum.
  **([#235](https://github.com/grafana/tanka/pull/235))**

## 0.8.0 (2020-02-13)
 (**@xvzf**)
The next big one is here! Feature packed with environment overriding and `tk export`. Furthermore lots of bugs were fixed, so using Tanka should be much
smoother now!

#### Highlight: Overriding `vendor` per Environment **([#198](https://github.com/grafana/tanka/pull/198))**

It is now possible, to have a `vendor/` directory managed by `jb` on an
environment basis: https://tanka.dev/libraries/overriding. This means you can
test out changes in libraries in single environments (like `dev`), without
affecting others (like `prod`).

#### Notice:

Changes done in the last release (v0.7.1) can cause indentation changes when
using `std.manifestYAMLFromJSON()`, related to bumping `gopkg.in/yaml.v2` to
`gopkg.in/yaml.v3`.  
Please encourage all your teammembers to upgrade to at least v0.7.1 to avoid
whitespace-only diffs on your projects.

### Features

- **cli**: `tk export` can be used to write all generated Kubernetes resources
  to `.yaml` files

### Bug Fixes

- **kubernetes**: Fail on `diff` when `kubectl` had an internal error
  **([#213](https://github.com/grafana/tanka/pull/213))**
- **kubernetes**: Stop injecting namespaces into wrong places:  
  Tanka was injecting the default namespace into resources of all kinds,
  regardless of whether they actually took one. This caused errors, so we
  stopped doing this. From now on, the default namespace will only be injected
  when the resource is actually namespaced.
  **([#208](https://github.com/grafana/tanka/pull/208))**

* **cli**: `tk diff` colors:  
  Before, the coloring was unstable when scrolling up and down. We fixed this by
  pressing CAPS-LOCK.  
  Furthermore, the output of `tk diff` now also works on light color schemes,
  without messing up the background color.
  **([#210](https://github.com/grafana/tanka/pull/210))**
* **cli**: Proper `--version` output:  
  The release binaries now show the real semver on `tk --version`, instead of
  the git commit sha. **([#201](https://github.com/grafana/tanka/pull/201))**
* **cli**: Print diff on apply again:  
  While refactoring, we accidentally forgot to dereference a pointer, so that
  `tk apply` showed a memory address instead of the actual differences, which
  was kinda pointless. **([#200](https://github.com/grafana/tanka/pull/200))**

## 0.7.1 (2020-02-06)

This is a smaller release focused on critical bug fixes and some other minor
enhancements. While features are included, none of them are significant, meaning
they are part of a patch release.

#### Critical: `parseYaml` works now

Before, `std.native('parseYaml')` did not work at all, a line of code got lost
during merge/rebase, resulting in `parseYaml` returning invalid data, that
Jsonnet could not process. This issue has been fixed in
**([#195](https://github.com/grafana/tanka/pull/195))**.

#### Jsonnet update

The built-in Jsonnet compiler has been upgraded to the lastest master
[`07fa4c0`](https://github.com/google/go-jsonnet/commit/07fa4c037b4ff8b5e601546cb5de4abecaf2651d).
In some cases, this should provide up to 50% more speed, especially when
`base64` is involved, which is now natively implemented.
**([#196](https://github.com/grafana/tanka/pull/196))**

### Features

- **cli**: `tk env set|add` has been extended by `--server-from-context`, which
  allows to parse `$KUBECONFIG` to find the apiServer's IP directly from that
  file, instead of having to manually specify it by hand.
  **([#184](https://github.com/grafana/tanka/pull/184))**
- **jsonnet**: `vendor` overrides:  
  It is now possible to have a `vendor/` directory per environment, so that
  updating upstream libraries can be done gradually.
  **([#185](https://github.com/grafana/tanka/pull/185))**
- **kubernetes**: disable `kubectl` validation:
  `tk apply` now takes `--validate=false` to pass that exact flag to `kubectl`
  as well, for disabling the integrated schema validation.
  **([#186](https://github.com/grafana/tanka/pull/186))**

### Bug Fixes

- **jsonnet, cli**: Stable environment name: The value of `(import "tk").env.name`
  does not anymore depend on how Tanka was invoked, but will
  always be the relative path from `<rootDir>` to the environment's directory.
  **([#182](https://github.com/grafana/tanka/pull/182))**
- **jsonnet**: The nativeFunc `parseYaml` has been fixed to actually return a
  valid result **([#195](https://github.com/grafana/tanka/pull/195))**

## 0.7.0 (2020-01-21)

The promised big update is here! In the last couple of weeks a lot has happened.

Grafana Labs [announced Tanka to the
public](https://grafana.com/blog/2020/01/09/introducing-tanka-our-way-of-deploying-to-kubernetes/),
and the project got a lot of positive feedback, shown both on HackerNews and in
a 500+ increase in GitHub stars!

While we do not ship big new features this time, we ironed out many annoyances
and made the overall experience a lot better:

#### Better website + tutorial ([#134](https://github.com/grafana/tanka/pull/134))

Our [new website](https://tanka.dev) is published! It does not only look super
sleek and performs like a supercar, we also revisited (and rewrote) the most of
the content, to provide especially new users a good experience.

This especially includes the **[new
tutorial](https://tanka.dev/tutorial/overview)**, which gives new and probably
even more experienced users a good insight into how Tanka is meant to be used.

#### :rotating_light::rotating_light: Disabling `import ".yaml"` ([#176](https://github.com/grafana/tanka/pull/176)) :rotating_light::rotating_light:

Unfortunately, we **had to disable the feature** that allowed to directly import
YAML files using the familiar `import` syntax, introduced in v0.6.0, because it
caused serious issues with `importstr`, which became unusable.

While our extensions to the Jsonnet language are cool, it is a no-brainer that
compatibility with upstream Jsonnet is more important. We will work with the
maintainers of Jsonnet to find a solution to enable both, `importstr` and
`import ".yaml"`

**Workaround:**

```diff
- import "foo.yaml"
+ std.parseYaml(importstr "foo.yaml")
```

#### `k.libsonnet` installation ([#140](https://github.com/grafana/tanka/pull/140))

Previously, installing `k.libsonnet` was no fun. While the library is required
for nearly every Tanka project, it was not possible to install it properly using
`jb`, manual work was required.

From now on, **Tanka automatically takes care of this**. A regular `tk init`
installs everything you need. In case you prefer another solution, disable this
new thing using `tk init --k8s=false`.

### Features

- **cli**, **kubernetes**: `k.libsonnet` is now automatically installed on `tk init` **([#140](https://github.com/grafana/tanka/pull/140))**:  
  Before, installing `k.libsonnet` was a time consuming manual task. Tanka now
  takes care of this, as long as `jb` is present on the `$PATH`. See
  https://tanka.dev/tutorial/k-lib#klibsonnet for more details.
- **cli**: `tk env --server-from-context`:  
  This new flag allows to infer the cluster IP from an already set up `kubectl`
  context. No need to remember IP's anymore – and they are even autocompleted on
  the shell. **([#145](https://github.com/grafana/tanka/pull/145))**
- **cli**, **jsonnet**: extCode, extVar:  
  `-e` / `--extCode` and `--extVar` allow using `std.extVar()` in Tanka as well.
  In general, `-e` is the flag to use, because it correctly handles all Jsonnet
  types (string, int, bool). Strings need quoting!
  **([#178](https://github.com/grafana/tanka/pull/178))**

* **jsonnet**: The contents of `spec.json` are now accessible from Jsonnet using
  `(import "tk").env`. **([#163](https://github.com/grafana/tanka/pull/163))**
* **jsonnet**: Lists (`[ ]`) are now fully supported, at an arbitrary level of
  nesting! **([#166](https://github.com/grafana/tanka/pull/166))**

### Bug Fixes

- **jsonnet**: `nil` values are ignored from the output. This allows to disable
  objects using the `if ... then {}` pattern, which returns nil if `false`
  **([#162](https://github.com/grafana/tanka/pull/162))**.
- **cli**: `-t` / `--target` is now case-insensitive
  **([#130](https://github.com/grafana/tanka/pull/130))**

---

## 0.6.1 (2020-01-06)

First release of the new year! This one is a quick patch that lived on master
for some time, fixing an issue with the recent "missing namespaces" enhancement
leading to `apply` being impossible when no namespace is included in Jsonnet.

More to come soon :D

---

## 0.6.0 (2019-11-27)

It has been quite some time since the last release during which Tanka has become
much more mature, especially regarding the code quality and structure.

Furthermore, Tanka has just hit the 100 Stars :tada:

Notable changes include:

#### API ([#97](https://github.com/grafana/tanka/commit/c5edb8b0153ef991765f2f555c839b0f9a487e75))

The most notable change is probably the **Go API**, available at
`https://godoc.org/github.com/grafana/tanka/pkg/tanka`, which allows to use all
features of Tanka directly from any other Golang application, without needing to
exec the binary. The API is inspired by the command line parameters and should
feel very similar.

#### Importing YAML ([#106](https://github.com/grafana/tanka/commit/8029efa44461b5f7ba83a218ccc45bd758c8a322))

It is now possible to import `.yaml` documents directly from Jsonnet. Just use
the familiar syntax `import "foo.yaml"` like you would with JSON.

#### Missing Namespaces ([#120](https://github.com/grafana/tanka/commit/3b9fac1563a75a571b512887602eb53f82e565bf))

Tanka now handles namespaces that are not yet created, in a more user friendly
way than `kubectl\*\* does natively.  
During diff, all objects of an in-existent namespace are shown as new and when
applying, namespaces are applied first to allow applying in a single step.

### Features

- **tool/imports**: import analysis using upstream jsonnet: Due to recent
  changes to google/jsonnet, we can now use the upstream compiler for static
  import analysis
  ([#84](https://github.com/grafana/tanka/commit/394cb12b28beb0ea05d065594b6cf5c3f92de5e4))
- **Array output**: The output of Jsonnet may now be an array of Manifests.
  Nested arrays are not supported yet.
  ([#112](https://github.com/grafana/tanka/commit/eb647793ff5515bc828e4f91186655c143bb6a04))

### Bug Fixes

- **Command Usage Guidelines**: Tanka now uses the [command description
  syntax](https://en.wikipedia.org/wiki/Command-line_interface#Command_description_syntax)
  ([#94](https://github.com/grafana/tanka/commit/13238e5941bd6e68f410d3938d1a285224c2f91d))
- **cli/env** resolved panic on missing `spec.json`
  ([#108](https://github.com/grafana/tanka/commit/9bd15e6b4226164efe45f50c9ed41c4a5673ea2d))

---

## 0.5.0 (2019-09-20)

This version adds a set of commands to manipulate environments (`tk env add, rm, set, list`) ([#73](https://github.com/grafana/tanka/pull/73)). The commands are
mostly `ks env` compatible, allowing `tk env` be used as a drop-in replacement
in scripts.

Furthermore, an error message has been improved, to make sure users can
differentiate between parse issues in `.jsonnet` and `spec.json`
([#71](https://github.com/grafana/tanka/pull/71)).

---

## 0.4.0 (2019-09-06)

After nearly a month, the next feature packed release of Tanka is ready!
Highlights include the new documentation website https://tanka.dev, regular
expression support for targets, diff histograms and several bug-fixes.

### Features

- **cli**: `tk show` now aborts by default, when invoked in a non-interactive
  session. Use `--dangerous-allow-redirect` to disable this safe-guard
  ([#47](https://github.com/grafana/tanka/issues/47)).
- **kubernetes**: Regexp Targets: It is now possible to use regular expressions
  when specifying the targets using `--target` / `-t`. Use it to easily select
  multiple objects at once: https://tanka.dev/targets/#regular-expressions
  ([#64](https://github.com/grafana/tanka/issues/64)).
- **kubernetes**: Diff histogram: Tanka now allows to summarize the differences
  between the live configuration and the local one, by using the unix
  `diffstat(1)` utility. Gain a sneek peek at a change using `tk diff -s .`!
  ([#67](https://github.com/grafana/tanka/issues/67))

### Bug Fixes

- **kubernetes**: Tanka does not fail anymore, when the configuration file
  `spec.json` is missing from an Environment. While you cannot apply or diff,
  the show operation works totally fine
  ([#56](https://github.com/grafana/tanka/issues/56),
  [#63](https://github.com/grafana/tanka/issues/63)).
- **kubernetes**: Errors from `kubectl` are now correctly passed to the user
  ([#61](https://github.com/grafana/tanka/issues/61)).
- **cli**: `tk diff` does not output useless empty lines (`\n`) anymore
  ([#62](https://github.com/grafana/tanka/issues/62)).

---

## 0.3.0 (2019-08-13)

Tanka v0.3.0 is here!

This version includes lots of tiny fixes and detail improvements, to make it easier for everyone to configure their Kubernetes clusters.

Enjoy target support, enhancements to the diff UX and an improved CLI experience.

### Features

The most important feature is **target support** ([#30](https://github.com/tbraack/tanka/issues/30)) ([caf205a](https://github.com/tbraack/tanka/commit/caf205a)): Using `--target=kind/name`, you can limit your working set to a subset of the objects, e.g. to do a staged rollout.

There where some other features added:

- **cli:** autoApprove, forceApply ([#35](https://github.com/tbraack/tanka/issues/35)) ([626b097](https://github.com/tbraack/tanka/commit/626b097)): allows to skip the interactive verification. Furthermore, `kubectl` can now be invoked with `--force`.
- **cli:** print deprecated warnings in verbose mode. ([#39](https://github.com/tbraack/tanka/issues/39)) ([6de170d](https://github.com/tbraack/tanka/commit/6de170d)): Warnings about the deprecated configs are only printed in verbose mode
- **kubernetes:** add namespace to apply preamble ([#23](https://github.com/tbraack/tanka/issues/23)) ([9e2d927](https://github.com/tbraack/tanka/commit/9e2d927)): The interactive verification now shows the `metadata.namespace` as well.
- **cli:** diff UX enhancements ([#34](https://github.com/tbraack/tanka/issues/34)) ([7602a19](https://github.com/tbraack/tanka/commit/7602a19)): The user experience of the `tk diff` subcommand has been improved:
  - if the output is too long to fit on a single screen, the systems `PAGER` is invoked
  - if differences are found, the exit status is set to `16`.
  - When `tk apply` is invoked, the diff is shown again, to make sure you apply what you want

### Bug Fixes

- **cli:** invalid command being executed twice ([#42](https://github.com/tbraack/tanka/issues/42)) ([28c6898](https://github.com/tbraack/tanka/commit/28c6898)): When the command failed, it was executed twice, due to an error in the error handling of the CLI.
- **cli**: config miss ([#22](https://github.com/tbraack/tanka/issues/22)) ([32bc8a4](https://github.com/tbraack/tanka/commit/32bc8a4)): It was not possible to use the new configuration format, due to an error in the config parsing.
- **cli:** remove datetime from log ([#24](https://github.com/tbraack/tanka/issues/24)) ([1e37b20](https://github.com/tbraack/tanka/commit/1e37b20))
- **kubernetes:** correct diff type on 1.13 ([#31](https://github.com/tbraack/tanka/issues/31)) ([574f946](https://github.com/tbraack/tanka/commit/574f946)): On kubernetes 1.13.0, `subset` was used, although `native` is already supported.
- **kubernetes:** Nil pointer deference in subset diff. ([#36](https://github.com/tbraack/tanka/issues/36)) ([f53c2b5](https://github.com/tbraack/tanka/commit/f53c2b5))
- **kubernetes:** sort during reconcile ([#33](https://github.com/tbraack/tanka/issues/33)) ([ab9c43a](https://github.com/tbraack/tanka/commit/ab9c43a)): The output of the reconcilation phase is now stable in ordering

---

## [0.2.0](https://github.com/tbraack/tanka/compare/v0.1.0...v0.2.0) (2019-08-07)

### Features

- **cli:** Completions ([#7](https://github.com/tbraack/tanka/issues/7)) ([aea3bdf](https://github.com/tbraack/tanka/commit/aea3bdf)): Tanka is now able auto-complete most of the command line arguments and flags. Supported shells are `bash`, `zsh` and `fish`.
- **cmd:** allow the baseDir to be passed as an argument ([#6](https://github.com/tbraack/tanka/issues/6)) ([55adf80](https://github.com/tbraack/tanka/commit/55adf80)), ([#12](https://github.com/tbraack/tanka/issues/12)) ([3248bb9](https://github.com/tbraack/tanka/commit/3248bb9)): `tk` **breaks** with the current behaviour and requires the baseDir / environment to be passed explicitely on the command line, instead of assuming it as `pwd`. This is because it allows more `go`-like UX. It is also very handy for scripts not needing to switch the directory.
- **kubernetes:** subset-diff ([#11](https://github.com/tbraack/tanka/issues/11)) ([13f6fdd](https://github.com/tbraack/tanka/commit/13f6fdd)): `tk diff` support for version below Kubernetes `1.13` is here :tada:! The strategy is called _subset diff_ and effectively compares only the fields already present in the config. This allows the (hopefully) most bloat-free experience possible without server side diff.
- **tooling:** import analysis ([#10](https://github.com/tbraack/tanka/issues/10)) ([ce2b0d3](https://github.com/tbraack/tanka/commit/ce2b0d3)): Adds `tk tool imports`, which allows to list all imports of a single file (even transitive ones). Optionally pass a git commit hash, to check whether any of the changed files is imported, to figure out which environments need to be re-applied.

---

## 0.1.0 (2019-07-31)

This release marks the begin of tanka's history :tada:!

As of now, tanka aims to nearly seemlessly connect to the point where [ksonnet](https://github.com/ksonnet/ksonnet) left.
The current feature-set is basic, but usable: The three main workflow commands are available (`show`, `diff`, `apply`), environments are supported, code-sharing is done using [`jb`](https://github.com/jsonnet-bundler/jsonnet-bundler).

Stay tuned!

### Features

- **kubernetes:** Show ([7c4bee8](https://github.com/tbraack/tanka/commit/7c4bee8)): Equivalent to `ks show`, allows previewing the generated yaml.
- **kubernetes:** Diff ([a959f38](https://github.com/tbraack/tanka/commit/a959f38)): Uses the `kubectl diff` to obtain a sanitized difference betweent the current and the desired state. Requires Kubernetes 1.13+
- **kubernetes:** Apply ([8fcb4c1](https://github.com/tbraack/tanka/commit/8fcb4c1)): Applies the changes to the cluster (like `ks apply`)
- **kubernetes:** Apply approval ([4c6414f](https://github.com/tbraack/tanka/commit/4c6414f)): Requires a typed `yes` to apply, gives the user the chance to verify cluster and context.
- **kubernetes:** Smart context ([2b3fd3c](https://github.com/tbraack/tanka/commit/2b3fd3c)): Infers the correct context from the `spec.json`. Prevents applying the correct config to the wrong cluster.
- Init Command ([ff8857c](https://github.com/tbraack/tanka/commit/ff8857c)): Initializes a new repository with the suggested directory structure.
