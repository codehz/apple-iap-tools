import { InAppPurchaseTransaction } from './InAppPurchaseTransaction.js'

/**
 * The decoded version of the encoded receipt data sent with the request to the App Store.
 *
 * @link https://developer.apple.com/documentation/appstorereceipts/responsebody/receipt
 */
export interface Receipt {
  /**
   * See {@link app_item_id}.
   */
  adam_id: string

  /**
   * Generated by App Store Connect and used by the App Store to uniquely identify the app purchased.
   * Apps are assigned this identifier only in production.
   * Treat this value as a 64-bit long integer.
   */
  app_item_id: string

  /**
   * The app's version number. The app's version number corresponds to the value of CFBundleVersion (in iOS) or
   * CFBundleShortVersionString (in macOS) in the Info.plist.
   * In production, this value is the current version of the app on the device based on the
   * {@link receipt_creation_date_ms}. In the sandbox, the value is always '1.0'.
   */
  application_version: string

  /**
   * The bundle identifier for the app to which the receipt belongs. You provide this string on App Store Connect.
   * This corresponds to the value of CFBundleIdentifier in the Info.plist file of the app.
   */
  bundle_id: string

  /**
   * A unique identifier for the app download transaction.
   */
  download_id: number

  /**
   * The time the receipt expires for apps purchased through the Volume Purchase Program,
   * in a date-time format similar to the ISO 8601.
   *
   * @example 2021-03-01 07:00:00 Etc/GMT
   */
  expiration_date?: string

  /**
   * The time the receipt expires for apps purchased through the Volume Purchase Program,
   * in UNIX epoch time format, in milliseconds.
   * If this key is not present for apps purchased through the Volume Purchase Program, the receipt does not expire.
   * Use this time format for processing dates.
   *
   * @example 1616411598724
   */
  expiration_date_ms?: string

  /**
   * The time the receipt expires for apps purchased through the Volume Purchase Program, in the Pacific Time zone.
   *
   * @example 2021-01-01 00:00:00 America/Los_Angeles
   */
  expiration_date_pst?: string

  /**
   * An array that contains the in-app purchase receipt fields for all in-app purchase transactions.
   */
  in_app?: InAppPurchaseTransaction[]

  /**
   * The version of the app that the user originally purchased. This value does not change, and corresponds to the
   * value of CFBundleVersion (in iOS) or CFBundleShortVersionString (in macOS) in the Info.plist file
   * of the original purchase. In the sandbox environment, the value is always '1.0'.
   */
  original_application_version: string

  /**
   * The time of the original app purchase, in a date-time format similar to ISO 8601.
   *
   * @example 2021-03-01 07:00:00 Etc/GMT
   */
  original_purchase_date: string

  /**
   * The time of the original app purchase, in UNIX epoch time format, in milliseconds.
   * Use this time format for processing dates.
   *
   * @example 1616411598724
   */
  original_purchase_date_ms: string

  /**
   * The time of the original app purchase, in the Pacific Time zone.
   *
   * @example 2021-01-01 00:00:00 America/Los_Angeles
   */
  original_purchase_date_pst: string

  /**
   * The time the user ordered the app available for pre-order, in a date-time format similar to ISO 8601.
   * Only present if the app was ordered through pre-order.
   *
   * @example 2021-03-01 07:00:00 Etc/GMT
   */
  preorder_date?: string

  /**
   * The time the user ordered the app available for pre-order, in UNIX epoch time format, in milliseconds.
   * This field is only present if the user pre-orders the app.
   * Use this time format for processing dates.
   *
   * @example 1616411598724
   */
  preorder_date_ms?: string

  /**
   * The time the user ordered the app available for pre-order, in the Pacific Time zone.
   *
   * @example 2021-01-01 00:00:00 America/Los_Angeles
   */
  preorder_date_pst?: string

  /**
   * The time the App Store generated the receipt, in a date-time format similar to ISO 8601.
   *
   * @example 2021-03-01 07:00:00 Etc/GMT
   */
  receipt_creation_date: string

  /**
   * The time the App Store generated the receipt, in UNIX epoch time format, in milliseconds.
   * Use this time format for processing dates. This value does not change.
   *
   * @example 1616411598724
   */
  receipt_creation_date_ms: string

  /**
   * The time the App Store generated the receipt, in the Pacific Time zone.
   *
   * @example 2021-01-01 00:00:00 America/Los_Angeles
   */
  receipt_creation_date_pst: string

  /**
   * The type of receipt generated.
   * The value corresponds to the environment in which the app or VPP purchase was made.
   */
  receipt_type: 'Production' | 'ProductionVPP' | 'ProductionSandbox' | 'ProductionVPPSandbox'

  /**
   * The time the request to the verifyReceipt endpoint was processed and the response was generated,
   * in a date-time format similar to ISO 8601.
   *
   * @example 2021-03-01 07:00:00 Etc/GMT
   */
  request_date: string

  /**
   * The time the request to the verifyReceipt endpoint was processed and the response was generated,
   * in UNIX epoch time format, in milliseconds. Use this time format for processing dates.
   *
   * @example 1616411598724
   */
  request_date_ms: string

  /**
   * The time the request to the verifyReceipt endpoint was processed and the response was generated,
   * in the Pacific Time zone.
   *
   * @example 2021-01-01 00:00:00 America/Los_Angeles
   */
  request_date_pst: string

  /**
   * An arbitrary number that identifies a revision of your app. In the sandbox, this key's value is '0'.
   */
  version_external_identifier: number
}
