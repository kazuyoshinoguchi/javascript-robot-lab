# ステージ21〜30 学習ガイド

1. **Stage 21 — JSON入門**：マップの宝石座標 `[2,3]` を `[3,3]` に変える。JSONが表示へ反映されたら「JSON書き出し」で `stage21.json` を保存。
2. **Stage 22 — JSON応用**：宝石 `[5,4]` を `[6,4]` に変え、`walls` に `[4,4]` を追加する。壁があるマップでも自動走行できるか確認する。
3. **Stage 23 — API入門**：`fetch("maps/stage23-missing.json")` を `fetch("maps/stage23.json")` に修正。Chrome/SafariのHTTP通信で読み込み。GitHub Pagesか開発用サーバーが必要。
4. **Stage 24 — API応用**：`maps/stage24.json` に直し、`if (!response.ok)` に変更。`await response.json()` で内容を読む流れを観察する。
5. **Stage 25 — デバッグ入門**：誤った `collect()` の位置を移動して解決。「1手ずつ」を使って原因を特定する。
6. **Stage 26 — デバッグ応用**：最後のループ回数を修正して、ゴールの先まで進みすぎないようにする。
7. **Stage 27 — TypeScript入門**：`energy: string` を `energy: number` に直す。画面の「型チェック」は同梱の本物のTypeScriptコンパイラを使う。
8. **Stage 28 — TypeScript応用**：`moveRobot(start, "3")` を `moveRobot(start, 3)` に修正し、`interface` と関数型を読む。
9. **Stage 29 — GitHub入門**：`issueTitle`、`branch`、`tasks` を編集し、Issueの下書きを作る。実際にGitHubでIssueとブランチを作ったら自己確認チェックを付ける。
10. **Stage 30 — GitHub応用**：YAMLに `pull_request:`、`npm run typecheck`、`npm test` を追加。`check.yml` の内容を理解し、実際にGitHubでPull Requestを作ってActionsの実行結果を確認する。最後に自己確認する。

## 学び方

- 1つのステージに15〜30分。まず説明を読んで自分で編集、失敗したらヒントを見て修正。
- Stage 21/22 は JSON を実際に解析。Stage 23/24 はHTTPでファイルを実際に取得。Stage 27/28 は本物の TypeScript コンパイラで型チェック。
- Stage 29/30 はGitHub上のIssue・Branch・Pull Request・Actionsを実際に操作してください。**ゲームのチェックだけではGitHubへの変更は行われません。**
- セーブデータは「⬇ セーブデータ」から。GitHubで過去の変更を管理するときはCommitメッセージを具体的に書く。

## ファイル構成

- `index.html`：ステージ1〜30 ゲーム本体
- `maps/stage23.json`、`maps/stage24.json`：通信ステージ用サンプルデータ
- `maps/stage21-template.json`、`maps/stage22-template.json`：JSON練習の初期例
- `typescript/*.ts`、`tsconfig.json`：実際のTypeScriptコード
- `.github/workflows/check.yml`：CI設定（学習用完成例）
- `tests/*.test.js`：テスト
- `vendor/typescript.js`：TypeScriptブラウザコンパイラ（ライセンス同梱）

## GitHubでの更新

従来の`index.html`だけでなく、ZIPの**フォルダ全体**をリポジトリのルートへコピーします。GitHub DesktopならリポジトリをMacにCloneし、ZIP解凍内容を作業フォルダへコピー → Commit → Push。Github Pages設定は`main` / `(root)`のままでOKです。
