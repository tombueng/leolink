// Baichuan's message numbers, in one list.
#pragma once

#include <QtGlobal>

/// Every message leolink sends or reads, by the number in its header. Get and
/// set are separate messages, usually neighbours. Taken from reolink_aio's
/// Baichuan client and confirmed on an E1, an E1 Pro and an E1 Zoom; what each
/// one carries is in docs/protocol.md.
///
/// reolink_aio is MIT, Copyright (c) 2023 starkillerOG. Its message numbers and
/// XML element names are what leolink follows; its notice is in LICENSE.
///
/// FakeCamera keeps its own numbers on purpose: a test double that shared
/// these could not catch one of them being wrong.
namespace leolink::baichuan {

constexpr quint32 kLogin = 1;
constexpr quint32 kLogout = 2;
constexpr quint32 kVideo = 3;
constexpr quint32 kPtzControl = 18;
constexpr quint32 kPtzGoToPreset = 19;
constexpr quint32 kReboot = 23;
constexpr quint32 kSetImage = 25;
constexpr quint32 kGetImage = 26;
constexpr quint32 kAlarmSubscribe = 31;
constexpr quint32 kAlarm = 33;
constexpr quint32 kSetPorts = 36;
constexpr quint32 kGetPorts = 37;
constexpr quint32 kGetOsd = 44;
constexpr quint32 kSetOsd = 45;
constexpr quint32 kGetMotion = 46;
constexpr quint32 kSetMotion = 47;
constexpr quint32 kGetMask = 52;
constexpr quint32 kSetMask = 53;
constexpr quint32 kGetRecordCfg = 54;
constexpr quint32 kSetRecordCfg = 55;
constexpr quint32 kGetEncoder = 56;
constexpr quint32 kSetEncoder = 57;
constexpr quint32 kUpgradeFile = 67;
constexpr quint32 kGetFtp = 70;
constexpr quint32 kSetFtp = 71;
constexpr quint32 kGetNetwork = 76;
constexpr quint32 kVersion = 80;
constexpr quint32 kGetRecordPlan = 81;
constexpr quint32 kSetRecordPlan = 82;
constexpr quint32 kLinkType = 93;
constexpr quint32 kHdd = 102;
constexpr quint32 kGetTime = 104;
constexpr quint32 kSetTime = 105;
constexpr quint32 kUid = 114;
constexpr quint32 kWifiSignal = 115;
constexpr quint32 kWifi = 116;
constexpr quint32 kStreamInfo = 146;
constexpr quint32 kPtzPresets = 190;
constexpr quint32 kGetLed = 208;
constexpr quint32 kSetLed = 209;
constexpr quint32 kSetEmail = 216;
constexpr quint32 kGetEmail = 217;
constexpr quint32 kSetPush = 218;
constexpr quint32 kGetPush = 219;
constexpr quint32 kSetAudioAlarm = 231;
constexpr quint32 kGetAudioAlarm = 232;
constexpr quint32 kGetDayNight = 296;
constexpr quint32 kSetDayNight = 297;
constexpr quint32 kGetAi = 299;
constexpr quint32 kSetAi = 300;

/// Byte 12 of a header about the camera's push messages rather than a channel.
constexpr quint8 kPushChannel = 251;

} // namespace leolink::baichuan
