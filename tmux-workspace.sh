#!/bin/sh

session="compounded-workspace"

# Check if the session exists, discarding output
# We can check $? for the exit status (zero for success, non-zero for failure)
tmux has-session -t $session 2>/dev/null

if [ $? != 0 ]; then
  # Create new detached session and start vim
  tmux new-session -d -n "develop" -s $session -x $(tput cols) -y $(tput lines)
  tmux send-keys "vim" C-m

  # Expo server pane
  sudo sysctl -w kern.maxfiles=5242880
  sudo sysctl -w kern.maxfilesperproc=524288
  tmux split-window -h -p 25
  tmux send-keys "npm i && npm start" C-m

  # Git pane
  tmux split-window -v
  tmux send-keys "git fetch origin" C-m

  # Select first pane
  tmux select-pane -t 0
fi

# Attach to created session
tmux attach-session -t $session

