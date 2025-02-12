import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.css";
import "../styles/toast.css";

export function pushNotify(
	title = "Notification",
	message,
	type,
	position = "bottom right"
) {
	new Notify({
		status: type,
		title: title,
		text: message,
		effect: "fade",
    speed: 300,
    customClass: "toast-container",
		showCloseButton: true,
		autoclose: true,
		autotimeout: 3000,
		notificationsGap: 20,
		type: "outline",
		position: position,
	});
}
