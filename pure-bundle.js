var SDL = (function () {
    'use strict';

    /*
    * Copyright (c) 2019, Livio, Inc.
    * All rights reserved.
    *
    * Redistribution and use in source and binary forms, with or without
    * modification, are permitted provided that the following conditions are met:
    *
    * Redistributions of source code must retain the above copyright notice, this
    * list of conditions and the following disclaimer.
    *
    * Redistributions in binary form must reproduce the above copyright notice,
    * this list of conditions and the following
    * disclaimer in the documentation and/or other materials provided with the
    * distribution.
    *
    * Neither the name of the Livio Inc. nor the names of its contributors
    * may be used to endorse or promote products derived from this software
    * without specific prior written permission.
    *
    * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
    * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
    * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
    * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
    * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
    * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
    * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
    * POSSIBILITY OF SUCH DAMAGE.
    */

    class Enum {
        constructor() {
            // intentionally empty
        }

        // returns the key for a given value if the value is found within the key:value map
        // potentially dangerous - assumes that all values are unique among the set.
        static keyForValueInternal(value, map) {
            for (let key in map) {
                if (map[key] === value) {
                    return key;
                }
            }

            return null;
        }

        // returns the given value if the value is found within the key:value map
        static valueForStringInternal(value, map) {
            for (let key in map) {
                if (map[key] === value) {
                    return map[key];
                }
            }

            return null;
        }

        valueForString(value) {
            throw "method must be overridden";
        }
    }

    /*
    * Copyright (c) 2019, Livio, Inc.
    * All rights reserved.
    *
    * Redistribution and use in source and binary forms, with or without
    * modification, are permitted provided that the following conditions are met:
    *
    * Redistributions of source code must retain the above copyright notice, this
    * list of conditions and the following disclaimer.
    *
    * Redistributions in binary form must reproduce the above copyright notice,
    * this list of conditions and the following
    * disclaimer in the documentation and/or other materials provided with the
    * distribution.
    *
    * Neither the name of the Livio Inc. nor the names of its contributors
    * may be used to endorse or promote products derived from this software
    * without specific prior written permission.
    *
    * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
    * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
    * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
    * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
    * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
    * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
    * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
    * POSSIBILITY OF SUCH DAMAGE.
    */

    class FrameType extends Enum {

        constructor() {
            super();
        }

        static get CONTROL() {
            return FrameType.MAP.CONTROL;
        }

        static get FIRST() {
            return FrameType.MAP.FIRST;
        }

        static get CONSECUTIVE() {
            return FrameType.MAP.CONSECUTIVE;
        }

        static get SINGLE() {
            return FrameType.MAP.SINGLE;
        }

        static valueForString(value) {
            for (let key in FrameType.MAP) {
                if (FrameType.MAP[key] === value) {
                    return FrameType.MAP[key];
                }
            }

            return null;
        }
    }


    FrameType.MAP = Object.freeze({
      'CONTROL': 0x00,
      'FIRST': 0x02,
      'CONSECUTIVE': 0x03,
      'SINGLE': 0x01,
    });

    /*
    * Copyright (c) 2019, Livio, Inc.
    * All rights reserved.
    *
    * Redistribution and use in source and binary forms, with or without
    * modification, are permitted provided that the following conditions are met:
    *
    * Redistributions of source code must retain the above copyright notice, this
    * list of conditions and the following disclaimer.
    *
    * Redistributions in binary form must reproduce the above copyright notice,
    * this list of conditions and the following
    * disclaimer in the documentation and/or other materials provided with the
    * distribution.
    *
    * Neither the name of the Livio Inc. nor the names of its contributors
    * may be used to endorse or promote products derived from this software
    * without specific prior written permission.
    *
    * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
    * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
    * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
    * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
    * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
    * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
    * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
    * POSSIBILITY OF SUCH DAMAGE.
    */

    // import * as BSON from 'bson/dist/bson.js';
    // import { BSON } from 'bson';

    const BSON = require('bson');

    /*
    * Copyright (c) 2019, Livio, Inc.
    * All rights reserved.
    *
    * Redistribution and use in source and binary forms, with or without
    * modification, are permitted provided that the following conditions are met:
    *
    * Redistributions of source code must retain the above copyright notice, this
    * list of conditions and the following disclaimer.
    *
    * Redistributions in binary form must reproduce the above copyright notice,
    * this list of conditions and the following
    * disclaimer in the documentation and/or other materials provided with the
    * distribution.
    *
    * Neither the name of the Livio Inc. nor the names of its contributors
    * may be used to endorse or promote products derived from this software
    * without specific prior written permission.
    *
    * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
    * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
    * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
    * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
    * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
    * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
    * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
    * POSSIBILITY OF SUCH DAMAGE.
    */

    class FunctionID extends Enum {

        constructor() {
            super();
        }

        static get ADD_COMMAND() {
            return FunctionID.MAP.AddCommand;
        }

        static get ON_LANGUAGE_CHANGE() {
            return FunctionID.MAP.OnLanguageChange;
        }

        static getIdFromName(name) {
            return FunctionID.MAP[name];
        }

        static getNameFromId(id) {
            for (let name in FunctionID.MAP) {
                if (FunctionID.MAP[name] === id) {
                    return name;
                }
            }
        }

        static valueForString(value) {
            return FunctionID.valueForStringInternal(value, FunctionID.MAP);
        }

        static keyForValue(value) {
            return FunctionID.keyForValueInternal(value, FunctionID.MAP);
        }

        static getIsNotification(name) {
            return FunctionID.NOTIFIACTIONS[name] !== undefined;
        }
    }

    FunctionID.MAP = Object.freeze({
                                       'RegisterAppInterface': 1,
                                       'UnregisterAppInterface': 2,
                                       'SetGlobalProperties': 3,
                                       'ResetGlobalProperties': 4,
                                       'AddCommand': 5,
                                       'DeleteCommand': 6,
                                       'AddSubMenu': 7,
                                       'DeleteSubMenu': 8,
                                       'CreateInteractionChoiceSet': 9,
                                       'PerformInteraction': 10,
                                       'DeleteInteractionChoiceSet': 11,
                                       'Alert': 12,
                                       'Show': 13,
                                       'Speak': 14,
                                       'SetMediaClockTimer': 15,
                                       'PerformAudioPassThru': 16,
                                       'EndAudioPassThru': 17,
                                       'SubscribeButton': 18,
                                       'UnsubscribeButton': 19,
                                       'SubscribeVehicleData': 20,
                                       'UnsubscribeVehicleData': 21,
                                       'GetVehicleData': 22,
                                       'ReadDID': 23,
                                       'GetDTCs': 24,
                                       'ScrollableMessage': 25,
                                       'Slider': 26,
                                       'ShowConstantTBT': 27,
                                       'AlertManeuver': 28,
                                       'UpdateTurnList': 29,
                                       'ChangeRegistration': 30,
                                       'GenericResponse': 31,
                                       'PutFile': 32,
                                       'DeleteFile': 33,
                                       'ListFiles': 34,
                                       'SetAppIcon': 35,
                                       'SetDisplayLayout': 36,
                                       'DiagnosticMessage': 37,
                                       'SystemRequest': 38,
                                       'SendLocation': 39,
                                       'DialNumber': 40,
                                       'ButtonPress': 41,
                                       'GetInteriorVehicleData': 43,
                                       'SetInteriorVehicleData': 44,
                                       'GetWayPoints': 45,
                                       'SubscribeWayPoints': 46,
                                       'UnsubscribeWayPoints': 47,
                                       'GetSystemCapability': 48,
                                       'SendHapticData': 49,
                                       'SetCloudAppProperties': 50,
                                       'GetCloudAppProperties': 51,
                                       'PublishAppService': 52,
                                       'GetAppServiceData': 53,
                                       'GetFile': 54,
                                       'PerformAppServiceInteraction': 55,

                                       'GetInteriorVehicleDataConsent': 62,
                                       'ReleaseInteriorVehicleDataModule': 63,
                                       'OnHMIStatus': 32768,
                                       'OnAppInterfaceUnregistered': 32769,
                                       'OnButtonEvent': 32770,
                                       'OnButtonPress': 32771,
                                       'OnVehicleData': 32772,
                                       'OnCommand': 32773,
                                       'OnTBTClientState': 32774,
                                       'OnDriverDistraction': 32775,
                                       'OnPermissionsChange': 32776,
                                       'OnAudioPassThru': 32777,
                                       'OnLanguageChange': 32778,
                                       'OnKeyboardInput': 32779,
                                       'OnTouchEvent': 32780,
                                       'OnSystemRequest': 32781,
                                       'OnHashChange': 32782,
                                       'OnInteriorVehicleData': 32783,
                                       'OnWayPointChange': 32784,
                                       'OnRCStatus': 32785,
                                       'OnAppServiceData': 32786,
                                       'OnSystemCapabilityUpdated': 32787,
                                       'EncodedSyncPData': 65536,
                                       'SyncPData': 65537,
                                       'OnEncodedSyncPData': 98304,
                                       'OnSyncPData': 98305,

                                        'RussTestRPC': 99999,
                                   });

    FunctionID.NOTIFIACTIONS = Object.freeze({
                                                 'OnHMIStatus': 32768,
                                                 'OnAppInterfaceUnregistered': 32769,
                                                 'OnButtonEvent': 32770,
                                                 'OnButtonPress': 32771,
                                                 'OnVehicleData': 32772,
                                                 'OnCommand': 32773,
                                                 'OnTBTClientState': 32774,
                                                 'OnDriverDistraction': 32775,
                                                 'OnPermissionsChange': 32776,
                                                 'OnAudioPassThru': 32777,
                                                 'OnLanguageChange': 32778,
                                                 'OnKeyboardInput': 32779,
                                                 'OnTouchEvent': 32780,
                                                 'OnSystemRequest': 32781,
                                                 'OnHashChange': 32782,
                                                 'OnInteriorVehicleData': 32783,
                                                 'OnWayPointChange': 32784,
                                                 'OnRCStatus': 32785,
                                                 'OnAppServiceData': 32786,
                                                 'OnSystemCapabilityUpdated': 32787,
                                                 'EncodedSyncPData': 65536,
                                                 'SyncPData': 65537,
                                                 'OnEncodedSyncPData': 98304,
                                                 'OnSyncPData': 98305
                                             });

    /*
    * Copyright (c) 2019, Livio, Inc.
    * All rights reserved.
    *
    * Redistribution and use in source and binary forms, with or without
    * modification, are permitted provided that the following conditions are met:
    *
    * Redistributions of source code must retain the above copyright notice, this
    * list of conditions and the following disclaimer.
    *
    * Redistributions in binary form must reproduce the above copyright notice,
    * this list of conditions and the following
    * disclaimer in the documentation and/or other materials provided with the
    * distribution.
    *
    * Neither the name of the Livio Inc. nor the names of its contributors
    * may be used to endorse or promote products derived from this software
    * without specific prior written permission.
    *
    * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
    * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
    * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
    * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
    * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
    * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
    * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
    * POSSIBILITY OF SUCH DAMAGE.
    */

    class RpcType extends Enum {



        constructor() {
            super();
        }

        static get NOTIFICATION() {
            return RpcType.MAP.NOTIFICATION;
        }

        static get RESPONSE() {
            return RpcType.MAP.RESPONSE;
        }

        static get REQUEST() {
            return RpcType.MAP.REQUEST;
        }

        static valueForString(value) {
            return RpcType.valueForStringInternal(value, RpcType.MAP);
        }

        static keyForValue(value) {
            return RpcType.keyForValueInternal(value, RpcType.MAP);
        }
    }

    RpcType.MAP = Object.freeze({
                                   'NOTIFICATION': 0x2,
                                   'RESPONSE': 0x1,
                                   'REQUEST': 0x0,
                               });

    /**
     * Wonky Javascript BSON parser / encoder. Replace with a C implementation later (just do bindings from mongo driver/bson.c to Node)
     */
    function BSONParser() {
    	this.offset = 0;
    	this.data = false;
    }

    BSONParser.prototype.readByte = function() {
    	var v;
    	v = (this.data[this.offset]); this.offset++;
    	return v;
    };


    BSONParser.prototype.readInt64 = function() {
    	var v = 0;
    /*	v |= (this.data[this.offset+0]);
    	v |= (this.data[this.offset+1] << 8 );
    	v |= (this.data[this.offset+2] << 16);
    	v |= (this.data[this.offset+3] << 24);
    	v |= (this.data[this.offset+4] << 32);
    	v |= (this.data[this.offset+5] << 40);
    	v |= (this.data[this.offset+6] << 48);
    	v |= (this.data[this.offset+7] << 56); */
    	this.offset += 8;
    	return v;
    };

    BSONParser.prototype.readInt32 = function() {
    	var v = 0;
    	v |= (this.data[this.offset+3] << 24);
    	v |= (this.data[this.offset+2] << 16);
    	v |= (this.data[this.offset+1] << 8);
    	v |= (this.data[this.offset+0]);
    	this.offset += 4;
    	return v;
    };

    BSONParser.prototype.reset = function (data) {
    	this.offset = 0;
    	this.length = 0;
    	this.data = data;
    };

    BSONParser.prototype.parse = function (data) {
    	if (!(data instanceof Buffer)) {
    		throw "The input type must be a Buffer";
    	}
    	this.reset(data);
    	this.length = this.readInt32();
    	this.length -= this.offset;
    	//console.log("Parse data of length = " + this.length);
    	return this.parseElist();
    };

    BSONParser.prototype.parseElist = function () {
    	var kv = {};
    	while (this.offset < this.length - 1) {

    		var type = this.readByte();
    		
    		// TODO: there is a bug in the decoder or encoder... see the line below
    		if (type == 0x00) return kv;

    		if (type == 0x1) {
    			var k = this.parseCstring(),
    					v = this.parseFloat();
    			kv[k]=v;
    			continue;
    		}

    		if (type == 0x2) {
    			var k = this.parseCstring(),
    					v = this.parseString();
    			kv[k]=v;
    			continue;
    		}

    		if (type == 0x3 || type == 0x4) {
    			var k = this.parseCstring(),
    					v = new BSONParser().parse(this.data.slice(this.offset));
    			this.offset += this.readInt32();
    			if (type == 4) {
    				c = [];
    				for (i in v) c.push(v[i]);
    				v = c;
    			}
    					
    			kv[k]=v;
    			continue;
    		}
    		
    		if (type == 0x5) {
    			var k = this.parseCstring(),
    					v = this.parseBinary();
    			kv[k]=v;
    			continue;
    		}

    		if (type == 0x8) {
    			var k = this.parseCstring(),
    					v = this.readByte() == 1;
    			kv[k]=v;
    			continue;
    		}

    		if (type == 0x9) {
    			var k = this.parseCstring(),
    					v = this.readInt64();
    			kv[k]=new Date(v);
    			continue;
    		}

    		if (type == 0x0a) {
    			var k = this.parseCstring();
    			kv[k]=null;
    			continue;
    		}

    		if (type == 0x10) {
    			var k = this.parseCstring(),
    					v = this.readInt32();
    			kv[k]=v;
    			continue;
    		}

    		if (type == 0x11) {
    			var k = this.parseCstring(),
    					v = this.readInt64();
    			kv[k]=v;
    			continue;
    		}

    		throw "Unrecognized data type 0x" + type.toString(16) + " @"+this.offset;

    	}
    	return kv;
    };

    BSONParser.prototype.parseCstring = function () {
    	var str = new Buffer(256), i;
    	for (i = 0; i < 256; i++) {
    		var chr = this.readByte();
    		if (chr == 0) break;
    		str[i] = chr;
    	}
    	return str.toString('ascii', 0, i);
    };

    BSONParser.prototype.parseFloat = function () {
    	// TODO: laterz
    	return this.readInt64();
    };

    BSONParser.prototype.parseString = function () {
    	var len = this.readInt32();
    	var str = new Buffer(len), i;

    	for (i = 0; i < len; i++) {
    		str[i] = this.data[this.offset]; this.offset++;
    	}

    	return str.toString('utf8', 0, len-1);
    };

    BSONParser.prototype.parseBinary = function () {
    	var len = this.readInt32();
    	var type = this.readByte(); // TODO: sub type is ignored for now
    	var str = new Buffer(len), i;

    	for (i = 0; i < len; i++) {
    		str[i] = this.data[this.offset]; this.offset++;
    	}

    	return str;
    };

    exports.Parser = BSONParser;
    exports.Encoder = BSONEncoder;

    exports.encode = function (obj) {
    	return new BSONEncoder().encode(obj);	
    };

    exports.decode = function (data) {
    	return new BSONParser().parse(data);	
    };

    function BSONEncoder() {
    	this.buffer = [];
    	this.offset = 0;
    }

    BSONEncoder.prototype.writeByte = function (v) {
    	this.buffer.push( v & 0xff);
    };

    BSONEncoder.prototype.writeBytes = function (buf) {
    	for (var i = 0; i < buf.length; i++) {
    		this.writeByte(buf[i]);
    	}
    };

    BSONEncoder.prototype.writeInt32 = function (v) {
    	this.buffer.push((v)    );
    	this.buffer.push((v>>8) );
    	this.buffer.push((v>>16));
    	this.buffer.push((v>>24));
    };

    BSONEncoder.prototype.writeCstring = function (v) {
    	for (var i = 0; i < v.length; i++) {
    		this.writeByte(v.charCodeAt(i));
    	}
    	this.writeByte(0);
    };

    BSONEncoder.prototype.writeString = function (v) {
    	var buf = new Buffer(v, 'utf8');
    	this.writeInt32(buf.length+1);
    	for (var i = 0; i < buf.length; i++) {
    		this.writeByte(buf[i]);
    	}
    	this.writeByte(0);
    };

    BSONEncoder.prototype.writeBinary = function (buf) {
    	this.writeInt32(buf.length);
    	this.writeByte(0);
    	this.writeBytes(buf);
    };

    BSONEncoder.prototype.pack = function() {
    	console.log(this.buffer.length);
    	var data = new Buffer(this.buffer.length + 5), o = 0;
    	
    	for (var i = 0; i < data.length; i++) data[i] = 0;
    	
    	data[o++] = ((5+this.buffer.length) >> 0) & 0xff;
    	data[o++] = ((5+this.buffer.length) >> 8) & 0xff;
    	data[o++] = ((5+this.buffer.length) >> 16) & 0xff;
    	data[o++] = ((5+this.buffer.length) >> 24) & 0xff;

    	for (var i = 0; i < this.buffer.length; i++) {
    		data[o++] = this.buffer[i];
    	}
    	
    	data[o++] = 0;

    	return data;
    };

    BSONEncoder.prototype.encode = function (object) {
    	for (var k in object) {
    		this.encodeItem(k, object[k]);
    	}
    	return this.pack();
    };

    BSONEncoder.prototype.encodeItem = function (k, v) {
    	// console.log("k="+k+ ",v="+v+" t="+typeof(v));
    	if (v == null || typeof(v) == 'undefined') {
    		this.writeByte(0x0a);
    		this.writeCstring(k);
    		return;
    	}
    	if (typeof(v) == 'string') {
    		this.writeByte(0x02);
    		this.writeCstring(k);
    		this.writeString(v);
    		return;
    	}
    	if (typeof(v) == 'number') {
    		if (Math.round(v) == v) {
    			this.writeByte(0x10);
    			this.writeCstring(k);
    			this.writeInt32(v);
    		} else {
    			this.writeByte(0x11);
    			this.writeCstring(k);
    			this.writeInt64(v);
    		}
    		return;
    	}
    	if (v instanceof Array) {
    		this.writeByte(0x04);
    		this.writeCstring(k);
    		this.writeBytes(new BSONEncoder().encode(v));
    		return;
    	}
    	if (v instanceof Buffer) {
    		this.writeByte(0x05);
    		this.writeCstring(k);
    		this.writeBinary(v);
    		return;
    	}
    	if (typeof(v) == 'object') {
    		this.writeByte(0x03);
    		this.writeCstring(k);
    		this.writeBytes(new BSONEncoder().encode(v));
    		return;
    	}
    };

    /*
    * Copyright (c) 2019, Livio, Inc.
    * All rights reserved.
    *
    * Redistribution and use in source and binary forms, with or without
    * modification, are permitted provided that the following conditions are met:
    *
    * Redistributions of source code must retain the above copyright notice, this
    * list of conditions and the following disclaimer.
    *
    * Redistributions in binary form must reproduce the above copyright notice,
    * this list of conditions and the following
    * disclaimer in the documentation and/or other materials provided with the
    * distribution.
    *
    * Neither the name of the Livio Inc. nor the names of its contributors
    * may be used to endorse or promote products derived from this software
    * without specific prior written permission.
    *
    * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
    * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
    * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
    * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
    * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
    * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
    * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
    * POSSIBILITY OF SUCH DAMAGE.
    */

    class Bson {
        /**
         * Serialize a Javascript object.
         * 
         * @param object The Javascript object to serialize.
         * @param options Serialize options.
         * @return The Buffer object containing the serialized object.
         */
        static serialize (object, options) {
            return BSONParser.serialize(object, options);
        }

        /**
         * Deserialize data as BSON.
         * 
         * @param buffer The buffer containing the serialized set of BSON documents.
         * @param options Deserialize options.
         * @returns The deserialized Javascript Object.
         */
        static deserialize (object, options) {
            return BSONParser.deserialize(object, options);
        }
    }

    // export {
    //     Bson
    // }

    const SDL = {
        Bson
    };

    console.log(`SDL`,SDL);

    return SDL;

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZS1idW5kbGUuanMiLCJzb3VyY2VzIjpbIi4uL3NkbF9qYXZhc2NyaXB0X3N1aXRlL2xpYi9qcy91dGlsL0VudW0uanMiLCIuLi9zZGxfamF2YXNjcmlwdF9zdWl0ZS9saWIvanMvcHJvdG9jb2wvZW51bXMvRnJhbWVUeXBlLmpzIiwiLi4vc2RsX2phdmFzY3JpcHRfc3VpdGUvbGliL2pzL3V0aWwvQnNvbi5qcyIsIi4uL3NkbF9qYXZhc2NyaXB0X3N1aXRlL2xpYi9qcy9ycGMvZW51bXMvRnVuY3Rpb25JRC5qcyIsIi4uL3NkbF9qYXZhc2NyaXB0X3N1aXRlL2xpYi9qcy9ycGMvZW51bXMvUnBjVHlwZS5qcyIsInNyYy8zcmQvYnNvbi5qcyIsInNyYy9Cc29uLmpzIiwiaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmNsYXNzIEVudW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBpbnRlbnRpb25hbGx5IGVtcHR5XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyB0aGUga2V5IGZvciBhIGdpdmVuIHZhbHVlIGlmIHRoZSB2YWx1ZSBpcyBmb3VuZCB3aXRoaW4gdGhlIGtleTp2YWx1ZSBtYXBcbiAgICAvLyBwb3RlbnRpYWxseSBkYW5nZXJvdXMgLSBhc3N1bWVzIHRoYXQgYWxsIHZhbHVlcyBhcmUgdW5pcXVlIGFtb25nIHRoZSBzZXQuXG4gICAgc3RhdGljIGtleUZvclZhbHVlSW50ZXJuYWwodmFsdWUsIG1hcCkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gbWFwKSB7XG4gICAgICAgICAgICBpZiAobWFwW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIHJldHVybnMgdGhlIGdpdmVuIHZhbHVlIGlmIHRoZSB2YWx1ZSBpcyBmb3VuZCB3aXRoaW4gdGhlIGtleTp2YWx1ZSBtYXBcbiAgICBzdGF0aWMgdmFsdWVGb3JTdHJpbmdJbnRlcm5hbCh2YWx1ZSwgbWFwKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBtYXApIHtcbiAgICAgICAgICAgIGlmIChtYXBba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YWx1ZUZvclN0cmluZyh2YWx1ZSkge1xuICAgICAgICB0aHJvdyBcIm1ldGhvZCBtdXN0IGJlIG92ZXJyaWRkZW5cIjtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEVudW0gfTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5pbXBvcnQgeyBFbnVtIH0gZnJvbSAnLi4vLi4vdXRpbC9FbnVtLmpzJztcblxuY2xhc3MgRnJhbWVUeXBlIGV4dGVuZHMgRW51bSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IENPTlRST0woKSB7XG4gICAgICAgIHJldHVybiBGcmFtZVR5cGUuTUFQLkNPTlRST0w7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBGSVJTVCgpIHtcbiAgICAgICAgcmV0dXJuIEZyYW1lVHlwZS5NQVAuRklSU1Q7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBDT05TRUNVVElWRSgpIHtcbiAgICAgICAgcmV0dXJuIEZyYW1lVHlwZS5NQVAuQ09OU0VDVVRJVkU7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBTSU5HTEUoKSB7XG4gICAgICAgIHJldHVybiBGcmFtZVR5cGUuTUFQLlNJTkdMRTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdmFsdWVGb3JTdHJpbmcodmFsdWUpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIEZyYW1lVHlwZS5NQVApIHtcbiAgICAgICAgICAgIGlmIChGcmFtZVR5cGUuTUFQW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZyYW1lVHlwZS5NQVBba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuXG5GcmFtZVR5cGUuTUFQID0gT2JqZWN0LmZyZWV6ZSh7XG4gICdDT05UUk9MJzogMHgwMCxcbiAgJ0ZJUlNUJzogMHgwMixcbiAgJ0NPTlNFQ1VUSVZFJzogMHgwMyxcbiAgJ1NJTkdMRSc6IDB4MDEsXG59KTtcblxuZXhwb3J0IHsgRnJhbWVUeXBlIH07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuLy8gaW1wb3J0ICogYXMgQlNPTiBmcm9tICdic29uL2Rpc3QvYnNvbi5qcyc7XG4vLyBpbXBvcnQgeyBCU09OIH0gZnJvbSAnYnNvbic7XG5cbmNvbnN0IEJTT04gPSByZXF1aXJlKCdic29uJyk7XG5cbi8vIGltcG9ydCAqIGFzIEJTT04gZnJvbSAnYnNvbi9kaXN0L2Jzb24uYnVuZGxlLmpzJztcblxuLy8gY29uc3QgQlNPTiA9IHJlcXVpcmUoJ2Jzb24nKTtcbi8vIGltcG9ydCAqIGFzIEJTT04gZnJvbSAnYnNvbi9kaXN0L2Jzb24uYnVuZGxlLmpzJztcblxuLy8gaW1wb3J0ICogYXMgQlNPTiBmcm9tICdic29uJztcblxuLy8gaW1wb3J0ICogYXMgQlNPTiBmcm9tICcuLy4uLy4uLzNyZC1wYXJ0eS9ic29uLmpzJztcblxuXG5jbGFzcyBCc29uIHtcbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemUgYSBKYXZhc2NyaXB0IG9iamVjdC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gb2JqZWN0IFRoZSBKYXZhc2NyaXB0IG9iamVjdCB0byBzZXJpYWxpemUuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgU2VyaWFsaXplIG9wdGlvbnMuXG4gICAgICogQHJldHVybiBUaGUgQnVmZmVyIG9iamVjdCBjb250YWluaW5nIHRoZSBzZXJpYWxpemVkIG9iamVjdC5cbiAgICAgKi9cbiAgICBzdGF0aWMgc2VyaWFsaXplIChvYmplY3QsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIEJTT04uc2VyaWFsaXplKG9iamVjdCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzZXJpYWxpemUgZGF0YSBhcyBCU09OLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBidWZmZXIgVGhlIGJ1ZmZlciBjb250YWluaW5nIHRoZSBzZXJpYWxpemVkIHNldCBvZiBCU09OIGRvY3VtZW50cy5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBEZXNlcmlhbGl6ZSBvcHRpb25zLlxuICAgICAqIEByZXR1cm5zIFRoZSBkZXNlcmlhbGl6ZWQgSmF2YXNjcmlwdCBPYmplY3QuXG4gICAgICovXG4gICAgc3RhdGljIGRlc2VyaWFsaXplIChvYmplY3QsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIEJTT04uZGVzZXJpYWxpemUob2JqZWN0LCBvcHRpb25zKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEJzb24gfTsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuaW1wb3J0IHsgRW51bSB9IGZyb20gJy4uLy4uL3V0aWwvRW51bS5qcyc7XG5cbmNsYXNzIEZ1bmN0aW9uSUQgZXh0ZW5kcyBFbnVtIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgQUREX0NPTU1BTkQoKSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvbklELk1BUC5BZGRDb21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgT05fTEFOR1VBR0VfQ0hBTkdFKCkge1xuICAgICAgICByZXR1cm4gRnVuY3Rpb25JRC5NQVAuT25MYW5ndWFnZUNoYW5nZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SWRGcm9tTmFtZShuYW1lKSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvbklELk1BUFtuYW1lXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0TmFtZUZyb21JZChpZCkge1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIEZ1bmN0aW9uSUQuTUFQKSB7XG4gICAgICAgICAgICBpZiAoRnVuY3Rpb25JRC5NQVBbbmFtZV0gPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgdmFsdWVGb3JTdHJpbmcodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uSUQudmFsdWVGb3JTdHJpbmdJbnRlcm5hbCh2YWx1ZSwgRnVuY3Rpb25JRC5NQVApO1xuICAgIH1cblxuICAgIHN0YXRpYyBrZXlGb3JWYWx1ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gRnVuY3Rpb25JRC5rZXlGb3JWYWx1ZUludGVybmFsKHZhbHVlLCBGdW5jdGlvbklELk1BUCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldElzTm90aWZpY2F0aW9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uSUQuTk9USUZJQUNUSU9OU1tuYW1lXSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbn1cblxuRnVuY3Rpb25JRC5NQVAgPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1JlZ2lzdGVyQXBwSW50ZXJmYWNlJzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1VucmVnaXN0ZXJBcHBJbnRlcmZhY2UnOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU2V0R2xvYmFsUHJvcGVydGllcyc6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdSZXNldEdsb2JhbFByb3BlcnRpZXMnOiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWRkQ29tbWFuZCc6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEZWxldGVDb21tYW5kJzogNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FkZFN1Yk1lbnUnOiA3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRGVsZXRlU3ViTWVudSc6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDcmVhdGVJbnRlcmFjdGlvbkNob2ljZVNldCc6IDksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdQZXJmb3JtSW50ZXJhY3Rpb24nOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0RlbGV0ZUludGVyYWN0aW9uQ2hvaWNlU2V0JzogMTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBbGVydCc6IDEyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU2hvdyc6IDEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU3BlYWsnOiAxNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NldE1lZGlhQ2xvY2tUaW1lcic6IDE1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUGVyZm9ybUF1ZGlvUGFzc1RocnUnOiAxNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0VuZEF1ZGlvUGFzc1RocnUnOiAxNyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1N1YnNjcmliZUJ1dHRvbic6IDE4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVW5zdWJzY3JpYmVCdXR0b24nOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1N1YnNjcmliZVZlaGljbGVEYXRhJzogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdVbnN1YnNjcmliZVZlaGljbGVEYXRhJzogMjEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdHZXRWZWhpY2xlRGF0YSc6IDIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUmVhZERJRCc6IDIzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnR2V0RFRDcyc6IDI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU2Nyb2xsYWJsZU1lc3NhZ2UnOiAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NsaWRlcic6IDI2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU2hvd0NvbnN0YW50VEJUJzogMjcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBbGVydE1hbmV1dmVyJzogMjgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdVcGRhdGVUdXJuTGlzdCc6IDI5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2hhbmdlUmVnaXN0cmF0aW9uJzogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdHZW5lcmljUmVzcG9uc2UnOiAzMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1B1dEZpbGUnOiAzMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0RlbGV0ZUZpbGUnOiAzMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0xpc3RGaWxlcyc6IDM0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU2V0QXBwSWNvbic6IDM1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU2V0RGlzcGxheUxheW91dCc6IDM2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRGlhZ25vc3RpY01lc3NhZ2UnOiAzNyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1N5c3RlbVJlcXVlc3QnOiAzOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NlbmRMb2NhdGlvbic6IDM5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRGlhbE51bWJlcic6IDQwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQnV0dG9uUHJlc3MnOiA0MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0dldEludGVyaW9yVmVoaWNsZURhdGEnOiA0MyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NldEludGVyaW9yVmVoaWNsZURhdGEnOiA0NCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0dldFdheVBvaW50cyc6IDQ1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU3Vic2NyaWJlV2F5UG9pbnRzJzogNDYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdVbnN1YnNjcmliZVdheVBvaW50cyc6IDQ3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnR2V0U3lzdGVtQ2FwYWJpbGl0eSc6IDQ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU2VuZEhhcHRpY0RhdGEnOiA0OSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NldENsb3VkQXBwUHJvcGVydGllcyc6IDUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnR2V0Q2xvdWRBcHBQcm9wZXJ0aWVzJzogNTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdQdWJsaXNoQXBwU2VydmljZSc6IDUyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnR2V0QXBwU2VydmljZURhdGEnOiA1MyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0dldEZpbGUnOiA1NCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1BlcmZvcm1BcHBTZXJ2aWNlSW50ZXJhY3Rpb24nOiA1NSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnR2V0SW50ZXJpb3JWZWhpY2xlRGF0YUNvbnNlbnQnOiA2MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1JlbGVhc2VJbnRlcmlvclZlaGljbGVEYXRhTW9kdWxlJzogNjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdPbkhNSVN0YXR1cyc6IDMyNzY4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT25BcHBJbnRlcmZhY2VVbnJlZ2lzdGVyZWQnOiAzMjc2OSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ09uQnV0dG9uRXZlbnQnOiAzMjc3MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ09uQnV0dG9uUHJlc3MnOiAzMjc3MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ09uVmVoaWNsZURhdGEnOiAzMjc3MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ09uQ29tbWFuZCc6IDMyNzczLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT25UQlRDbGllbnRTdGF0ZSc6IDMyNzc0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT25Ecml2ZXJEaXN0cmFjdGlvbic6IDMyNzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT25QZXJtaXNzaW9uc0NoYW5nZSc6IDMyNzc2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT25BdWRpb1Bhc3NUaHJ1JzogMzI3NzcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdPbkxhbmd1YWdlQ2hhbmdlJzogMzI3NzgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdPbktleWJvYXJkSW5wdXQnOiAzMjc3OSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ09uVG91Y2hFdmVudCc6IDMyNzgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT25TeXN0ZW1SZXF1ZXN0JzogMzI3ODEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdPbkhhc2hDaGFuZ2UnOiAzMjc4MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ09uSW50ZXJpb3JWZWhpY2xlRGF0YSc6IDMyNzgzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT25XYXlQb2ludENoYW5nZSc6IDMyNzg0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT25SQ1N0YXR1cyc6IDMyNzg1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT25BcHBTZXJ2aWNlRGF0YSc6IDMyNzg2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT25TeXN0ZW1DYXBhYmlsaXR5VXBkYXRlZCc6IDMyNzg3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRW5jb2RlZFN5bmNQRGF0YSc6IDY1NTM2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU3luY1BEYXRhJzogNjU1MzcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdPbkVuY29kZWRTeW5jUERhdGEnOiA5ODMwNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ09uU3luY1BEYXRhJzogOTgzMDUsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdSdXNzVGVzdFJQQyc6IDk5OTk5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG5GdW5jdGlvbklELk5PVElGSUFDVElPTlMgPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdPbkhNSVN0YXR1cyc6IDMyNzY4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ09uQXBwSW50ZXJmYWNlVW5yZWdpc3RlcmVkJzogMzI3NjksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT25CdXR0b25FdmVudCc6IDMyNzcwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ09uQnV0dG9uUHJlc3MnOiAzMjc3MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdPblZlaGljbGVEYXRhJzogMzI3NzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT25Db21tYW5kJzogMzI3NzMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT25UQlRDbGllbnRTdGF0ZSc6IDMyNzc0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ09uRHJpdmVyRGlzdHJhY3Rpb24nOiAzMjc3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdPblBlcm1pc3Npb25zQ2hhbmdlJzogMzI3NzYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT25BdWRpb1Bhc3NUaHJ1JzogMzI3NzcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT25MYW5ndWFnZUNoYW5nZSc6IDMyNzc4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ09uS2V5Ym9hcmRJbnB1dCc6IDMyNzc5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ09uVG91Y2hFdmVudCc6IDMyNzgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ09uU3lzdGVtUmVxdWVzdCc6IDMyNzgxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ09uSGFzaENoYW5nZSc6IDMyNzgyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ09uSW50ZXJpb3JWZWhpY2xlRGF0YSc6IDMyNzgzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ09uV2F5UG9pbnRDaGFuZ2UnOiAzMjc4NCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdPblJDU3RhdHVzJzogMzI3ODUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT25BcHBTZXJ2aWNlRGF0YSc6IDMyNzg2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ09uU3lzdGVtQ2FwYWJpbGl0eVVwZGF0ZWQnOiAzMjc4NyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdFbmNvZGVkU3luY1BEYXRhJzogNjU1MzYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU3luY1BEYXRhJzogNjU1MzcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT25FbmNvZGVkU3luY1BEYXRhJzogOTgzMDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT25TeW5jUERhdGEnOiA5ODMwNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuZXhwb3J0IHsgRnVuY3Rpb25JRCB9O1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmltcG9ydCB7IEVudW0gfSBmcm9tICcuLi8uLi91dGlsL0VudW0uanMnO1xuXG5jbGFzcyBScGNUeXBlIGV4dGVuZHMgRW51bSB7XG5cblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBOT1RJRklDQVRJT04oKSB7XG4gICAgICAgIHJldHVybiBScGNUeXBlLk1BUC5OT1RJRklDQVRJT047XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBSRVNQT05TRSgpIHtcbiAgICAgICAgcmV0dXJuIFJwY1R5cGUuTUFQLlJFU1BPTlNFO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgUkVRVUVTVCgpIHtcbiAgICAgICAgcmV0dXJuIFJwY1R5cGUuTUFQLlJFUVVFU1Q7XG4gICAgfVxuXG4gICAgc3RhdGljIHZhbHVlRm9yU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBScGNUeXBlLnZhbHVlRm9yU3RyaW5nSW50ZXJuYWwodmFsdWUsIFJwY1R5cGUuTUFQKTtcbiAgICB9XG5cbiAgICBzdGF0aWMga2V5Rm9yVmFsdWUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFJwY1R5cGUua2V5Rm9yVmFsdWVJbnRlcm5hbCh2YWx1ZSwgUnBjVHlwZS5NQVApO1xuICAgIH1cbn1cblxuUnBjVHlwZS5NQVAgPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTk9USUZJQ0FUSU9OJzogMHgyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdSRVNQT05TRSc6IDB4MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUkVRVUVTVCc6IDB4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG5leHBvcnQgeyBScGNUeXBlIH07XG4iLCJpbXBvcnQgeyBCc29uIH0gZnJvbSBcIi4uLy4uLy4uL3NkbF9qYXZhc2NyaXB0X3N1aXRlXCI7XG5cbi8qKlxuICogV29ua3kgSmF2YXNjcmlwdCBCU09OIHBhcnNlciAvIGVuY29kZXIuIFJlcGxhY2Ugd2l0aCBhIEMgaW1wbGVtZW50YXRpb24gbGF0ZXIgKGp1c3QgZG8gYmluZGluZ3MgZnJvbSBtb25nbyBkcml2ZXIvYnNvbi5jIHRvIE5vZGUpXG4gKi9cbmZ1bmN0aW9uIEJTT05QYXJzZXIoKSB7XG5cdHRoaXMub2Zmc2V0ID0gMDtcblx0dGhpcy5kYXRhID0gZmFsc2U7XG59XG5cbkJTT05QYXJzZXIucHJvdG90eXBlLnJlYWRCeXRlID0gZnVuY3Rpb24oKSB7XG5cdHZhciB2O1xuXHR2ID0gKHRoaXMuZGF0YVt0aGlzLm9mZnNldF0pOyB0aGlzLm9mZnNldCsrO1xuXHRyZXR1cm4gdjtcbn1cblxuXG5CU09OUGFyc2VyLnByb3RvdHlwZS5yZWFkSW50NjQgPSBmdW5jdGlvbigpIHtcblx0dmFyIHYgPSAwO1xuLypcdHYgfD0gKHRoaXMuZGF0YVt0aGlzLm9mZnNldCswXSk7XG5cdHYgfD0gKHRoaXMuZGF0YVt0aGlzLm9mZnNldCsxXSA8PCA4ICk7XG5cdHYgfD0gKHRoaXMuZGF0YVt0aGlzLm9mZnNldCsyXSA8PCAxNik7XG5cdHYgfD0gKHRoaXMuZGF0YVt0aGlzLm9mZnNldCszXSA8PCAyNCk7XG5cdHYgfD0gKHRoaXMuZGF0YVt0aGlzLm9mZnNldCs0XSA8PCAzMik7XG5cdHYgfD0gKHRoaXMuZGF0YVt0aGlzLm9mZnNldCs1XSA8PCA0MCk7XG5cdHYgfD0gKHRoaXMuZGF0YVt0aGlzLm9mZnNldCs2XSA8PCA0OCk7XG5cdHYgfD0gKHRoaXMuZGF0YVt0aGlzLm9mZnNldCs3XSA8PCA1Nik7ICovXG5cdHRoaXMub2Zmc2V0ICs9IDg7XG5cdHJldHVybiB2O1xufVxuXG5CU09OUGFyc2VyLnByb3RvdHlwZS5yZWFkSW50MzIgPSBmdW5jdGlvbigpIHtcblx0dmFyIHYgPSAwO1xuXHR2IHw9ICh0aGlzLmRhdGFbdGhpcy5vZmZzZXQrM10gPDwgMjQpO1xuXHR2IHw9ICh0aGlzLmRhdGFbdGhpcy5vZmZzZXQrMl0gPDwgMTYpO1xuXHR2IHw9ICh0aGlzLmRhdGFbdGhpcy5vZmZzZXQrMV0gPDwgOCk7XG5cdHYgfD0gKHRoaXMuZGF0YVt0aGlzLm9mZnNldCswXSk7XG5cdHRoaXMub2Zmc2V0ICs9IDQ7XG5cdHJldHVybiB2O1xufVxuXG5CU09OUGFyc2VyLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdHRoaXMub2Zmc2V0ID0gMDtcblx0dGhpcy5sZW5ndGggPSAwO1xuXHR0aGlzLmRhdGEgPSBkYXRhO1xufVxuXG5CU09OUGFyc2VyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdGlmICghKGRhdGEgaW5zdGFuY2VvZiBCdWZmZXIpKSB7XG5cdFx0dGhyb3cgXCJUaGUgaW5wdXQgdHlwZSBtdXN0IGJlIGEgQnVmZmVyXCI7XG5cdH1cblx0dGhpcy5yZXNldChkYXRhKTtcblx0dGhpcy5sZW5ndGggPSB0aGlzLnJlYWRJbnQzMigpO1xuXHR0aGlzLmxlbmd0aCAtPSB0aGlzLm9mZnNldDtcblx0Ly9jb25zb2xlLmxvZyhcIlBhcnNlIGRhdGEgb2YgbGVuZ3RoID0gXCIgKyB0aGlzLmxlbmd0aCk7XG5cdHJldHVybiB0aGlzLnBhcnNlRWxpc3QoKTtcbn1cblxuQlNPTlBhcnNlci5wcm90b3R5cGUucGFyc2VFbGlzdCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGt2ID0ge307XG5cdHdoaWxlICh0aGlzLm9mZnNldCA8IHRoaXMubGVuZ3RoIC0gMSkge1xuXG5cdFx0dmFyIHR5cGUgPSB0aGlzLnJlYWRCeXRlKCk7XG5cdFx0XG5cdFx0Ly8gVE9ETzogdGhlcmUgaXMgYSBidWcgaW4gdGhlIGRlY29kZXIgb3IgZW5jb2Rlci4uLiBzZWUgdGhlIGxpbmUgYmVsb3dcblx0XHRpZiAodHlwZSA9PSAweDAwKSByZXR1cm4ga3Y7XG5cblx0XHRpZiAodHlwZSA9PSAweDEpIHtcblx0XHRcdHZhciBrID0gdGhpcy5wYXJzZUNzdHJpbmcoKSxcblx0XHRcdFx0XHR2ID0gdGhpcy5wYXJzZUZsb2F0KCk7XG5cdFx0XHRrdltrXT12O1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGUgPT0gMHgyKSB7XG5cdFx0XHR2YXIgayA9IHRoaXMucGFyc2VDc3RyaW5nKCksXG5cdFx0XHRcdFx0diA9IHRoaXMucGFyc2VTdHJpbmcoKTtcblx0XHRcdGt2W2tdPXY7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAodHlwZSA9PSAweDMgfHwgdHlwZSA9PSAweDQpIHtcblx0XHRcdHZhciBrID0gdGhpcy5wYXJzZUNzdHJpbmcoKSxcblx0XHRcdFx0XHR2ID0gbmV3IEJTT05QYXJzZXIoKS5wYXJzZSh0aGlzLmRhdGEuc2xpY2UodGhpcy5vZmZzZXQpKTtcblx0XHRcdHRoaXMub2Zmc2V0ICs9IHRoaXMucmVhZEludDMyKCk7XG5cdFx0XHRpZiAodHlwZSA9PSA0KSB7XG5cdFx0XHRcdGMgPSBbXTtcblx0XHRcdFx0Zm9yIChpIGluIHYpIGMucHVzaCh2W2ldKTtcblx0XHRcdFx0diA9IGM7XG5cdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRrdltrXT12O1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdFxuXHRcdGlmICh0eXBlID09IDB4NSkge1xuXHRcdFx0dmFyIGsgPSB0aGlzLnBhcnNlQ3N0cmluZygpLFxuXHRcdFx0XHRcdHYgPSB0aGlzLnBhcnNlQmluYXJ5KCk7XG5cdFx0XHRrdltrXT12O1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGUgPT0gMHg4KSB7XG5cdFx0XHR2YXIgayA9IHRoaXMucGFyc2VDc3RyaW5nKCksXG5cdFx0XHRcdFx0diA9IHRoaXMucmVhZEJ5dGUoKSA9PSAxO1xuXHRcdFx0a3Zba109djtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlID09IDB4OSkge1xuXHRcdFx0dmFyIGsgPSB0aGlzLnBhcnNlQ3N0cmluZygpLFxuXHRcdFx0XHRcdHYgPSB0aGlzLnJlYWRJbnQ2NCgpO1xuXHRcdFx0a3Zba109bmV3IERhdGUodik7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAodHlwZSA9PSAweDBhKSB7XG5cdFx0XHR2YXIgayA9IHRoaXMucGFyc2VDc3RyaW5nKCk7XG5cdFx0XHRrdltrXT1udWxsO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGUgPT0gMHgxMCkge1xuXHRcdFx0dmFyIGsgPSB0aGlzLnBhcnNlQ3N0cmluZygpLFxuXHRcdFx0XHRcdHYgPSB0aGlzLnJlYWRJbnQzMigpO1xuXHRcdFx0a3Zba109djtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlID09IDB4MTEpIHtcblx0XHRcdHZhciBrID0gdGhpcy5wYXJzZUNzdHJpbmcoKSxcblx0XHRcdFx0XHR2ID0gdGhpcy5yZWFkSW50NjQoKTtcblx0XHRcdGt2W2tdPXY7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR0aHJvdyBcIlVucmVjb2duaXplZCBkYXRhIHR5cGUgMHhcIiArIHR5cGUudG9TdHJpbmcoMTYpICsgXCIgQFwiK3RoaXMub2Zmc2V0O1xuXG5cdH07XG5cblx0cmV0dXJuIGt2O1xufVxuXG5CU09OUGFyc2VyLnByb3RvdHlwZS5wYXJzZUNzdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBzdHIgPSBuZXcgQnVmZmVyKDI1NiksIGk7XG5cdGZvciAoaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuXHRcdHZhciBjaHIgPSB0aGlzLnJlYWRCeXRlKCk7XG5cdFx0aWYgKGNociA9PSAwKSBicmVhaztcblx0XHRzdHJbaV0gPSBjaHI7XG5cdH1cblx0cmV0dXJuIHN0ci50b1N0cmluZygnYXNjaWknLCAwLCBpKTtcbn1cblxuQlNPTlBhcnNlci5wcm90b3R5cGUucGFyc2VGbG9hdCA9IGZ1bmN0aW9uICgpIHtcblx0Ly8gVE9ETzogbGF0ZXJ6XG5cdHJldHVybiB0aGlzLnJlYWRJbnQ2NCgpO1xufVxuXG5CU09OUGFyc2VyLnByb3RvdHlwZS5wYXJzZVN0cmluZyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGxlbiA9IHRoaXMucmVhZEludDMyKCk7XG5cdHZhciBzdHIgPSBuZXcgQnVmZmVyKGxlbiksIGk7XG5cblx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0c3RyW2ldID0gdGhpcy5kYXRhW3RoaXMub2Zmc2V0XTsgdGhpcy5vZmZzZXQrKztcblx0fVxuXG5cdHJldHVybiBzdHIudG9TdHJpbmcoJ3V0ZjgnLCAwLCBsZW4tMSk7XG59XG5cbkJTT05QYXJzZXIucHJvdG90eXBlLnBhcnNlQmluYXJ5ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgbGVuID0gdGhpcy5yZWFkSW50MzIoKTtcblx0dmFyIHR5cGUgPSB0aGlzLnJlYWRCeXRlKCk7IC8vIFRPRE86IHN1YiB0eXBlIGlzIGlnbm9yZWQgZm9yIG5vd1xuXHR2YXIgc3RyID0gbmV3IEJ1ZmZlcihsZW4pLCBpO1xuXG5cdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdHN0cltpXSA9IHRoaXMuZGF0YVt0aGlzLm9mZnNldF07IHRoaXMub2Zmc2V0Kys7XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG5leHBvcnRzLlBhcnNlciA9IEJTT05QYXJzZXI7XG5leHBvcnRzLkVuY29kZXIgPSBCU09ORW5jb2RlcjtcblxuZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbiAob2JqKSB7XG5cdHJldHVybiBuZXcgQlNPTkVuY29kZXIoKS5lbmNvZGUob2JqKTtcdFxufVxuXG5leHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdHJldHVybiBuZXcgQlNPTlBhcnNlcigpLnBhcnNlKGRhdGEpO1x0XG59XG5cbmZ1bmN0aW9uIEJTT05FbmNvZGVyKCkge1xuXHR0aGlzLmJ1ZmZlciA9IFtdO1xuXHR0aGlzLm9mZnNldCA9IDA7XG59XG5cbkJTT05FbmNvZGVyLnByb3RvdHlwZS53cml0ZUJ5dGUgPSBmdW5jdGlvbiAodikge1xuXHR0aGlzLmJ1ZmZlci5wdXNoKCB2ICYgMHhmZik7XG59XG5cbkJTT05FbmNvZGVyLnByb3RvdHlwZS53cml0ZUJ5dGVzID0gZnVuY3Rpb24gKGJ1Zikge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGJ1Zi5sZW5ndGg7IGkrKykge1xuXHRcdHRoaXMud3JpdGVCeXRlKGJ1ZltpXSk7XG5cdH1cbn1cblxuQlNPTkVuY29kZXIucHJvdG90eXBlLndyaXRlSW50MzIgPSBmdW5jdGlvbiAodikge1xuXHR0aGlzLmJ1ZmZlci5wdXNoKCh2KSAgICApO1xuXHR0aGlzLmJ1ZmZlci5wdXNoKCh2Pj44KSApO1xuXHR0aGlzLmJ1ZmZlci5wdXNoKCh2Pj4xNikpO1xuXHR0aGlzLmJ1ZmZlci5wdXNoKCh2Pj4yNCkpO1xufVxuXG5CU09ORW5jb2Rlci5wcm90b3R5cGUud3JpdGVDc3RyaW5nID0gZnVuY3Rpb24gKHYpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dGhpcy53cml0ZUJ5dGUodi5jaGFyQ29kZUF0KGkpKTtcblx0fVxuXHR0aGlzLndyaXRlQnl0ZSgwKTtcbn1cblxuQlNPTkVuY29kZXIucHJvdG90eXBlLndyaXRlU3RyaW5nID0gZnVuY3Rpb24gKHYpIHtcblx0dmFyIGJ1ZiA9IG5ldyBCdWZmZXIodiwgJ3V0ZjgnKTtcblx0dGhpcy53cml0ZUludDMyKGJ1Zi5sZW5ndGgrMSk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYnVmLmxlbmd0aDsgaSsrKSB7XG5cdFx0dGhpcy53cml0ZUJ5dGUoYnVmW2ldKTtcblx0fVxuXHR0aGlzLndyaXRlQnl0ZSgwKTtcbn1cblxuQlNPTkVuY29kZXIucHJvdG90eXBlLndyaXRlQmluYXJ5ID0gZnVuY3Rpb24gKGJ1Zikge1xuXHR0aGlzLndyaXRlSW50MzIoYnVmLmxlbmd0aCk7XG5cdHRoaXMud3JpdGVCeXRlKDApO1xuXHR0aGlzLndyaXRlQnl0ZXMoYnVmKTtcbn1cblxuQlNPTkVuY29kZXIucHJvdG90eXBlLnBhY2sgPSBmdW5jdGlvbigpIHtcblx0Y29uc29sZS5sb2codGhpcy5idWZmZXIubGVuZ3RoKTtcblx0dmFyIGRhdGEgPSBuZXcgQnVmZmVyKHRoaXMuYnVmZmVyLmxlbmd0aCArIDUpLCBvID0gMDtcblx0XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykgZGF0YVtpXSA9IDA7XG5cdFxuXHRkYXRhW28rK10gPSAoKDUrdGhpcy5idWZmZXIubGVuZ3RoKSA+PiAwKSAmIDB4ZmY7XG5cdGRhdGFbbysrXSA9ICgoNSt0aGlzLmJ1ZmZlci5sZW5ndGgpID4+IDgpICYgMHhmZjtcblx0ZGF0YVtvKytdID0gKCg1K3RoaXMuYnVmZmVyLmxlbmd0aCkgPj4gMTYpICYgMHhmZjtcblx0ZGF0YVtvKytdID0gKCg1K3RoaXMuYnVmZmVyLmxlbmd0aCkgPj4gMjQpICYgMHhmZjtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYnVmZmVyLmxlbmd0aDsgaSsrKSB7XG5cdFx0ZGF0YVtvKytdID0gdGhpcy5idWZmZXJbaV07XG5cdH1cblx0XG5cdGRhdGFbbysrXSA9IDA7XG5cblx0cmV0dXJuIGRhdGE7XG59XG5cbkJTT05FbmNvZGVyLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG5cdGZvciAodmFyIGsgaW4gb2JqZWN0KSB7XG5cdFx0dGhpcy5lbmNvZGVJdGVtKGssIG9iamVjdFtrXSk7XG5cdH1cblx0cmV0dXJuIHRoaXMucGFjaygpO1xufVxuXG5CU09ORW5jb2Rlci5wcm90b3R5cGUuZW5jb2RlSXRlbSA9IGZ1bmN0aW9uIChrLCB2KSB7XG5cdC8vIGNvbnNvbGUubG9nKFwiaz1cIitrKyBcIix2PVwiK3YrXCIgdD1cIit0eXBlb2YodikpO1xuXHRpZiAodiA9PSBudWxsIHx8IHR5cGVvZih2KSA9PSAndW5kZWZpbmVkJykge1xuXHRcdHRoaXMud3JpdGVCeXRlKDB4MGEpO1xuXHRcdHRoaXMud3JpdGVDc3RyaW5nKGspO1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAodHlwZW9mKHYpID09ICdzdHJpbmcnKSB7XG5cdFx0dGhpcy53cml0ZUJ5dGUoMHgwMik7XG5cdFx0dGhpcy53cml0ZUNzdHJpbmcoayk7XG5cdFx0dGhpcy53cml0ZVN0cmluZyh2KTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKHR5cGVvZih2KSA9PSAnbnVtYmVyJykge1xuXHRcdGlmIChNYXRoLnJvdW5kKHYpID09IHYpIHtcblx0XHRcdHRoaXMud3JpdGVCeXRlKDB4MTApO1xuXHRcdFx0dGhpcy53cml0ZUNzdHJpbmcoayk7XG5cdFx0XHR0aGlzLndyaXRlSW50MzIodik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMud3JpdGVCeXRlKDB4MTEpO1xuXHRcdFx0dGhpcy53cml0ZUNzdHJpbmcoayk7XG5cdFx0XHR0aGlzLndyaXRlSW50NjQodik7XG5cdFx0fVxuXHRcdHJldHVybjtcblx0fVxuXHRpZiAodiBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0dGhpcy53cml0ZUJ5dGUoMHgwNCk7XG5cdFx0dGhpcy53cml0ZUNzdHJpbmcoayk7XG5cdFx0dGhpcy53cml0ZUJ5dGVzKG5ldyBCU09ORW5jb2RlcigpLmVuY29kZSh2KSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmICh2IGluc3RhbmNlb2YgQnVmZmVyKSB7XG5cdFx0dGhpcy53cml0ZUJ5dGUoMHgwNSk7XG5cdFx0dGhpcy53cml0ZUNzdHJpbmcoayk7XG5cdFx0dGhpcy53cml0ZUJpbmFyeSh2KVxuXHRcdHJldHVybjtcblx0fVxuXHRpZiAodHlwZW9mKHYpID09ICdvYmplY3QnKSB7XG5cdFx0dGhpcy53cml0ZUJ5dGUoMHgwMyk7XG5cdFx0dGhpcy53cml0ZUNzdHJpbmcoayk7XG5cdFx0dGhpcy53cml0ZUJ5dGVzKG5ldyBCU09ORW5jb2RlcigpLmVuY29kZSh2KSk7XG5cdFx0cmV0dXJuO1xuXHR9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBCU09OUGFyc2VyOyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG4vLyBpbXBvcnQgQlNPTiBmcm9tICcuLy4uL25vZGVfbW9kdWxlcy9ic29uL2Rpc3QvYnNvbi5icm93c2VyLmVzbSc7XG4vLyBpbXBvcnQgQlNPTiBmcm9tICcuLy4uL25vZGVfbW9kdWxlcy9ic29uL2Rpc3QvYnNvbi5icm93c2VyLnVtZCc7XG4vLyBpbXBvcnQgQlNPTiBmcm9tICcuLy4uL25vZGVfbW9kdWxlcy9ic29uL2Rpc3QvYnNvbi5idW5kbGUuanMnO1xuaW1wb3J0IEJTT04gZnJvbSAnLi8zcmQvYnNvbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJzb24ge1xuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBhIEphdmFzY3JpcHQgb2JqZWN0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBvYmplY3QgVGhlIEphdmFzY3JpcHQgb2JqZWN0IHRvIHNlcmlhbGl6ZS5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBTZXJpYWxpemUgb3B0aW9ucy5cbiAgICAgKiBAcmV0dXJuIFRoZSBCdWZmZXIgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHNlcmlhbGl6ZWQgb2JqZWN0LlxuICAgICAqL1xuICAgIHN0YXRpYyBzZXJpYWxpemUgKG9iamVjdCwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gQlNPTi5zZXJpYWxpemUob2JqZWN0LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZSBkYXRhIGFzIEJTT04uXG4gICAgICogXG4gICAgICogQHBhcmFtIGJ1ZmZlciBUaGUgYnVmZmVyIGNvbnRhaW5pbmcgdGhlIHNlcmlhbGl6ZWQgc2V0IG9mIEJTT04gZG9jdW1lbnRzLlxuICAgICAqIEBwYXJhbSBvcHRpb25zIERlc2VyaWFsaXplIG9wdGlvbnMuXG4gICAgICogQHJldHVybnMgVGhlIGRlc2VyaWFsaXplZCBKYXZhc2NyaXB0IE9iamVjdC5cbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzZXJpYWxpemUgKG9iamVjdCwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gQlNPTi5kZXNlcmlhbGl6ZShvYmplY3QsIG9wdGlvbnMpO1xuICAgIH1cbn0iLCJpbXBvcnQgQnNvbiBmcm9tICcuL3NyYy9Cc29uLmpzJztcblxuLy8gZXhwb3J0IHtcbi8vICAgICBCc29uXG4vLyB9XG5cbmNvbnN0IFNETCA9IHtcbiAgICBCc29uXG59XG5cbmNvbnNvbGUubG9nKGBTRExgLFNETCk7XG5leHBvcnQgZGVmYXVsdCBTREw7Il0sIm5hbWVzIjpbIkJTT04iXSwibWFwcGluZ3MiOiI7OztJQUFBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBLE1BQU0sSUFBSSxDQUFDO0lBQ1gsSUFBSSxXQUFXLEdBQUc7SUFDbEI7SUFDQSxLQUFLOztJQUVMO0lBQ0E7SUFDQSxJQUFJLE9BQU8sbUJBQW1CLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMzQyxRQUFRLEtBQUssSUFB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LENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsRUFBRTtJQUNsRCxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3BDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsRUFBRTtJQUNGLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixFQUFDOztJQUVELFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxFQUFFO0lBQ2pELENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDdEMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLEVBQUU7SUFDRixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsRUFBQzs7SUFFRCxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxVQUFVLEdBQUcsRUFBRTtJQUNuRCxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsRUFBQzs7SUFFRCxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxXQUFXO0lBQ3hDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RDtJQUNBLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRDtJQUNBLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2xELENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2xELENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDO0lBQ25ELENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDOztJQUVuRCxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUM5QyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElB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
