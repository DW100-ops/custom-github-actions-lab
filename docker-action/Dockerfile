FROM alpine:3.20
RUN apk add --no-cache bash
COPY script.sh /script.sh
RUN chmod +x /script.sh
ENTRYPOINT ["/script.sh"]
