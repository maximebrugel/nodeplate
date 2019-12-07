# This script delete the old container (if existing) then build a new image and deploy a new container of the image.

# Set variables
BACKEND_TAGNAME="ubp_v1_backend"

# Delete the container if already running and then create a new container for development with only one node.
isContainerExisting="$(sudo docker ps --all --quiet --filter=name="$BACKEND_TAGNAME")"
if [ -n "$isContainerExisting" ]; then
  echo "### DELETING old Container ###"
  sudo docker stop $BACKEND_TAGNAME && sudo docker rm -f $BACKEND_TAGNAME
fi

echo "### Building docker image ### "
sudo docker build -t $BACKEND_TAGNAME .

echo "### Running docker container ### "
sudo docker run -d --name $BACKEND_TAGNAME -p 3005:3005 --restart=always -v ~/log:/app/logs/ $BACKEND_TAGNAME
