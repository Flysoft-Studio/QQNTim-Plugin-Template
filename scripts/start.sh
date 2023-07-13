#!/usr/bin/env bash

cd "$( dirname "${BASH_SOURCE[0]}" )/.."

[ ! $QQNTIM_HOME ] && export QQNTIM_HOME="$HOME/.local/share/QQNTim"

plugin_id=$(node --eval 'console.log(require("./publish/qqntim.json").id)')
plugin_dir="$QQNTIM_HOME/plugins/$plugin_id"

[ -d $plugin_dir ] && rm -rf "$plugin_dir"
cp -rf ./dist "$plugin_dir"
echo "环境准备完毕。"

qq 2>&1 | sed -e '/NODE_TLS_REJECT_UNAUTHORIZED/d' -e '/Gtk-Message/d' -e '/to show where the warning was created/d' -e '/gbm_wrapper\.cc/d' -e '/node_bindings\.cc/d' -e '/UnhandledPromiseRejectionWarning/d' -e '/\[BuglyManager\.cpp\]/d' -e '/\[NativeCrashHandler\.cpp\]/d' -e '/\[BuglyService\.cpp\]/d' -e '/\[HotUpdater\]/d' -e '/ERROR:CONSOLE/d'
